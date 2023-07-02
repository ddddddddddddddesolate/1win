import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { ToastContainer } from 'react-toastify';

import { PromoType } from 'app/types';
import { getAllPromos } from 'api/api';
import { AdminContext } from 'store/admin';

import AdminLayout from 'layouts/AdminLayout';

import Promos from 'components/Admin/Promos';
import Header from 'components/Admin/Header';

import { PromoMapper } from 'mappers/PromoMapper';

import styles from './styles.module.scss';

import 'react-toastify/dist/ReactToastify.css';

const Admin = () => {
  const navigate = useNavigate();

  const [promos, setPromos] = useState<PromoType[]>([]);

  const setupPromos = async () => {
    try {
      const { data: { data } } = await getAllPromos();

      setPromos(data.map(PromoMapper.map));
    } catch {
      navigate('/');
    }
  };

  useEffect(() => {
    setupPromos()
      .catch(console.log);
  }, []);

  return (
    <AdminLayout>
      <div className={styles.container}>
        <AdminContext.Provider value={{ promos, setPromos }}>
          <Header />
          <Promos />

          <ToastContainer />
        </AdminContext.Provider>
      </div>
    </AdminLayout>
  );
};

export default Admin;

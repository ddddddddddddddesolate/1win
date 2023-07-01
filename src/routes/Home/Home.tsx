import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import qs from 'qs';

import AppLayout from 'layouts/AppLayout';

import Header from 'components/Header';
import Video from 'components/Video';
import Actions from 'components/Actions';

import { PromoContext } from 'store/promo';

import { getOnePromo } from 'api/api';
import { PromoType } from 'app/types';
import { PromoMapper } from 'mappers/PromoMapper';

import styles from './styles.module.scss';

const setCookie = (name: string, days: number, code: string) => {
  let expires = '';

  if (days) {
    const date = new Date();

    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));

    expires = `; expires=${date.toUTCString()}`;
  }

  document.cookie = `${name}=${(code || '')}${expires}; path=/`;
};

const Home = () => {
  const { search } = useLocation();

  const [promo, setPromo] = useState<PromoType | null>(null);

  const fetchPromo = async (code: string) => {
    try {
      return await getOnePromo(code);
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    const query = qs.parse(search, { ignoreQueryPrefix: true });

    if (query.code) {
      setCookie('partner_key', 10, query.code as string);
    }

    fetchPromo(query.code as string)
      .then(response => {
        setPromo(PromoMapper.map(response?.data?.data));
      })
      .catch(console.error);
  }, [search]);

  const [isVideoEnded, setIsVideoEnded] = useState<boolean>(false);

  return (
    <AppLayout>
      <div className={styles.container}>
        <PromoContext.Provider value={promo}>
          <Header />

          <Video onVideoEnded={() => {
            setIsVideoEnded(true);
          }} />

          <Actions isVideoEnded={isVideoEnded} />
        </PromoContext.Provider>
      </div>
    </AppLayout>
  )
};

export default Home;

import { useState } from 'react';

import Button from 'react-bootstrap/Button';

import CreatePromoModal from 'components/Admin/CreatePromoModal';

import styles from './styles.module.scss';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <div className={styles.title}>Admin Panel</div>

      <Button variant="light" onClick={() => {
        setIsModalOpen(true);
      }}>
        Add promo
      </Button>

      <CreatePromoModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
      />
    </div>
  );
};

export default Header;

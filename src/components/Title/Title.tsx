import { useContext } from 'react';

import { PromoContext } from 'store/promo';

import styles from './styles.module.scss';

const Title = () => {
  const promo = useContext(PromoContext);

  return (
    <div className={styles.container}>
      <div className={styles.title}>{promo?.header?.text}</div>
      <div className={styles.earning}>{promo?.header?.money}</div>
    </div>
  );
};

export default Title;

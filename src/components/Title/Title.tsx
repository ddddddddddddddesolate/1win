import { useContext } from 'react';

import { PromoContext } from 'store/promo';

import styles from './styles.module.scss';

const Title = () => {
  const promo = useContext(PromoContext);

  return (
    <div className={styles.container}>
      <p className={styles.title}>{promo?.header?.text}</p>
      <p className={styles.earning}>{promo?.header?.money}</p>
    </div>
  );
};

export default Title;

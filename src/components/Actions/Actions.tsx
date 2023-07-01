import { useContext } from 'react';

import ButtonLink from 'components/ButtonLink';

import { PromoContext } from 'store/promo';

import styles from './styles.module.scss';

type Props = {
  isVideoEnded: boolean;
};

const Actions = ({ isVideoEnded }: Props) => {
  const promo = useContext(PromoContext);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        {promo?.footer?.text} <span className={styles.earning}>{promo?.footer?.money}</span>
      </div>

      <div className={styles.actions}>
        <ButtonLink
          text={promo?.leftButton?.text || ''}
          url={promo?.leftButton?.link || ''}
        />

        <ButtonLink
          text={promo?.rightButton?.text || ''}
          url={promo?.rightButton?.link || ''}
          pulsing={isVideoEnded}
        />
      </div>
    </div>
  );
}

export default Actions;

import ButtonLink from 'components/ButtonLink';

import styles from './styles.module.scss';

type Props = {
  isVideoEnded: boolean;
};

const Actions = ({ isVideoEnded }: Props) => (
  <div className={styles.container}>
    <div className={styles.title}>
      Download to get <span className={styles.earning}>5000₹</span>
    </div>

    <div className={styles.actions}>
      <ButtonLink text="get free strategy" url="https://telegram.me/+y7D5thSfOwo1ZWZi" />

      <ButtonLink
        text="download"
        url="https://1w-app.com/application/apk/1win.apk"
        pulsing={isVideoEnded}
      />
    </div>
  </div>
);

export default Actions;

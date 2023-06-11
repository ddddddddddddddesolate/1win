import ButtonLink from 'components/ButtonLink';

import styles from './styles.module.scss';

const Actions = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Download to get <span className={styles.earning}>5000₹</span>
      </div>

      <div className={styles.actions}>
        <ButtonLink text="bet" url="https://telegram.me/+y7D5thSfOwo1ZWZi" />
        <ButtonLink text="download" url="https://1w-app.com/application/apk/1win.apk" />
      </div>
    </div>
  );
};

export default Actions;

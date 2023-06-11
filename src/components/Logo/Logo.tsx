import LogoIcon from 'assets/logo.svg';

import styles from './styles.module.scss';

const Logo = () => {
  return (
    <div className={styles.container}>
      <img src={LogoIcon} alt="1win" />
    </div>
  )
};

export default Logo;

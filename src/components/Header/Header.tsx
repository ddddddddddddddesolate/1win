import Logo from 'components/Logo';
import Title from 'components/Title';

import styles from './styles.module.scss';

const Header = () => {
  return (
    <div className={styles.container}>
      <Logo />
      <Title />
    </div>
  );
};

export default Header;

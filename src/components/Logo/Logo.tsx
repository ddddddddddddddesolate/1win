import styles from './styles.module.scss';

const Logo = () => {
  return (
    <div className={styles.container}>
      <img src={`${process.env.PUBLIC_URL}/icons/logo.svg`} alt="1win" />
    </div>
  )
};

export default Logo;

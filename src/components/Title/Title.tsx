import styles from './styles.module.scss';

const Title = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Daily earnings of</p>
      <p className={styles.earning}>1000₹</p>
    </div>
  );
};

export default Title;

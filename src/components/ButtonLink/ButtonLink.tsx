import styles from './styles.module.scss';

type Props = {
  text: string;
  url: string;
};

const ButtonLink = ({ text, url }: Props) => {
  return (
    <a href={url} className={styles.button}>
      {text}
    </a>
  );
};

export default ButtonLink;

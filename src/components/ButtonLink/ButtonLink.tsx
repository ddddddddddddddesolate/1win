import classnames from 'classnames';

import styles from './styles.module.scss';

type Props = {
  text: string;
  url: string;
  pulsing?: boolean;
};

const ButtonLink = ({ text, url, pulsing = false }: Props) => {
  return (
    <a href={url} className={classnames(styles.button, {
      [styles.pulsing]: pulsing,
    })}>
      {text}
    </a>
  );
};

export default ButtonLink;

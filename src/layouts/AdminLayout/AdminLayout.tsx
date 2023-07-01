import { ReactNode } from 'react';

import styles from './styles.module.scss';

type Props = {
  children: ReactNode;
};

const AppLayout = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
};

export default AppLayout;

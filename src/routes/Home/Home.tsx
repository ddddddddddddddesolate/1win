import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import qs from 'qs';

import Header from 'components/Header';
import Video from 'components/Video';
import Actions from 'components/Actions';

import styles from './styles.module.scss';

const setCookie = (name: string, days: number, code: string) => {
  let expires = '';

  if (days) {
    const date = new Date();

    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));

    expires = `; expires=${date.toUTCString()}`;
  }

  document.cookie = `${name}=${(code || "")}${expires}; path=/`;
};

const Home = () => {
  const { search } = useLocation();

  useEffect(() => {
    const query = qs.parse(search, { ignoreQueryPrefix: true });

    if (query?.code) {
      setCookie('partner_key', 10, query.code as string);
    }
  }, [search]);

  const [isVideoEnded, setIsVideoEnded] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <Header />

      <Video onVideoEnded={() => {
        setIsVideoEnded(true);
      }} />

      <Actions isVideoEnded={isVideoEnded} />
    </div>
  )
};

export default Home;

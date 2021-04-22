import originData from './data.tsx';
import styles from './news.less';
import { useLocation } from 'umi';
import { useState, useEffect } from 'react';

export default () => {
  const location = useLocation();
  const [data, setData] = useState<string>('');

  useEffect(() => {
    if (location?.query?.id) {
      const data = originData.find((item) => +item.id === +location?.query?.id);
      setData(data);
    }
  }, [location]);

  return (
    <div className={styles.details}>
      <div className={styles.title}>{data.zh_name}</div>
      <div className={styles.time}>
        <span style={{ marginRight: '20px' }}>{data.time}</span>
        <span>{data?.source}</span>
      </div>
      {data?.zh_body}
    </div>
  );
};

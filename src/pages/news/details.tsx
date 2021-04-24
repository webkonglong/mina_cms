import originData from './data.tsx';
import styles from './news.less';
import { useLocation } from 'umi';
import { useState, useEffect, useContext } from 'react';
import { StoreContext } from '@/context/languageContext';

export default () => {
  const location = useLocation();
  const [data, setData] = useState<string>('');
  const { state } = useContext(StoreContext);

  useEffect(() => {
    if (location?.query?.id) {
      const data = originData.find((item) => +item.id === +location?.query?.id);
      setData(data);
    }
  }, [location]);

  return (
    <div className={styles.details}>
      <div className={styles.title}>
        {state.language === 'zh' ? data.zh_name : data.en_name}
      </div>
      <div className={styles.time}>
        <span style={{ marginRight: '20px' }}>{data.time}</span>
        <span>{data?.source}</span>
      </div>
      {state.language === 'zh' ? data.zh_body : data.en_body}
    </div>
  );
};

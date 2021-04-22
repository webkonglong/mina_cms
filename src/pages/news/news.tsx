import Banner from '@/component/banner';
import styles from './news.less';
import Tab from '@/component/tab';
import { useState, useEffect } from 'react';
import originData from './data.tsx';
import { history } from 'umi';

export default () => {
  const [tab, setTab] = useState<number>(0);
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    if (tab === 0) {
      setData(originData);
    } else {
      setData(originData.filter((item: any) => item.tab === tab));
    }
  }, [tab]);

  return (
    <>
      <Banner
        title={[
          'Mina 旨在打造一个蓬勃的去中心化网络和',
          '开放的可编程货币—所有人都能参与、创造、交易和壮大',
        ]}
      />
      <div className={styles.body}>
        <Tab
          tabs={['全部', '代币', '技术', '社区', '案例']}
          tab={tab}
          change={(tab) => {
            setTab(tab);
          }}
        />
        {data.map((item) => (
          <div
            key={item.id}
            className={styles.news}
            onClick={() => {
              history.push('/news-details?id=' + item.id);
            }}
          >
            <img src={item.img} alt="" />
            <div className={styles.new}>
              <div className={styles.name}>{item.name}</div>
              <div className={styles.abstract}>{item.abstract}</div>
              <div className={styles.time}>{item.time}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

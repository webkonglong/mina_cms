import Banner from '@/component/banner';
import styles from './case.less';
import Tab from '@/component/tab';
import { useState, useEffect } from 'react';
import originData from './data';
import startIndex from '@/local_modules/startIndex';
import { Pagination } from 'antd';
const PAGE_ZIZE = 10;

export default () => {
  const [tab, setTab] = useState<number>(0);
  const [current, setCurrent] = useState<number>(1);
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    setData(
      originData
        .filter((item) => item.tab === tab)
        .slice(
          startIndex(current, PAGE_ZIZE),
          startIndex(current, PAGE_ZIZE) + PAGE_ZIZE,
        ),
    );
  }, [current, tab]);

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
          tabs={['全部', '面向用户', '面向开发者', '面向机构']}
          tab={tab}
          change={(tab) => {
            setTab(tab);
          }}
        />
        {data.map((item) => (
          <div key={item.id} className={styles.news}>
            <img src={item.img} alt="" />
            <div className={styles.new}>
              <div className={styles.name}>{item.name}</div>
              <div className={styles.abstract}>{item.abstract}</div>
              <div className={styles.time}>{item.time}</div>
            </div>
          </div>
        ))}
        {originData.filter((item) => item.tab === tab).length > PAGE_ZIZE && (
          <Pagination
            size="default"
            total={originData.filter((item) => item.tab === tab).length}
            current={current}
            showSizeChanger={false}
            defaultPageSize={PAGE_ZIZE}
            onChange={(val) => {
              setCurrent(val);
            }}
          />
        )}
      </div>
    </>
  );
};

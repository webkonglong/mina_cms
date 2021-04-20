import Banner from '@/component/banner';
import styles from './video.less';
import Tab from '@/component/tab';
import { useState, useEffect } from 'react';
import originData from './data';
import startIndex from '@/local_modules/startIndex';
import Icon from '@/component/icon';
import { Pagination } from 'antd';
import { history } from 'umi';
const PAGE_ZIZE = 9;

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
    <div>
      <Banner
        title={[
          'Mina 旨在打造一个蓬勃的去中心化网络和',
          '开放的可编程货币—所有人都能参与、创造、交易和壮大',
        ]}
      />
      <div className={styles.body}>
        <Tab
          tabs={['全部', '介绍', '大会', '活动', '案例']}
          tab={tab}
          change={(tab) => {
            setTab(tab);
          }}
        />
        <div className={styles.data}>
          {data.map((item, i) => (
            <div
              key={item.id}
              className={styles.item}
              style={{ marginRight: (i + 1) % 3 === 0 ? '0px' : '40px' }}
            >
              <div className={styles.itemImg}>
                <img src={item.img} alt="" />
                <div className={styles.link}>
                  <Icon
                    type="iconplayback_icon"
                    onClick={() => {
                      history.push('/play?id=' + item.video);
                    }}
                  />
                </div>
              </div>
              <p>{item.name}</p>
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
      </div>
    </div>
  );
};

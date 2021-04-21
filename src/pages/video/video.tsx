import Banner from '@/component/banner';
import styles from './video.less';
import Tab from '@/component/tab';
import { useState, useEffect } from 'react';
import originData from './data';
import Icon from '@/component/icon';
import { history } from 'umi';

export default () => {
  const [tab, setTab] = useState<number>(0);
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    if (tab === 0) {
      setData(originData);
    } else {
      setData(originData.filter((item) => item.tab === tab));
    }
  }, [tab]);

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
          tabs={['全部', '介绍', '案例', '活动', 'Mina Labs video']}
          tab={tab}
          change={(tab) => {
            setTab(tab);
          }}
        />
        <div className={styles.data}>
          {data.map((item, i) => (
            <div key={item.id} className={styles.item}>
              <div className={styles.itemImg}>
                <img src={item.img} alt="" />
                <div className={styles.link}>
                  <Icon
                    type="iconplayback_icon"
                    onClick={() => {
                      if (item.url.startsWith('http')) {
                        window.open(item.url);
                      } else {
                        history.push('/play?id=' + item.id);
                      }
                    }}
                  />
                </div>
              </div>
              <p>{item.zh_Name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

import Banner from '@/component/banner';
import styles from './ecology.less';
import Tab from '@/component/tab';
import { useState, useEffect } from 'react';
import originData from './data';
import Icon from '@/component/icon';
import { message } from 'antd';

export default () => {
  const [tab, setTab] = useState<number>(0);
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    setData(originData.filter((item) => item.tab === tab + 1));
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
          tabs={['StakingPool', '支持机构']}
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
                    onClick={() => {
                      if (item.url) {
                        window.open(item.url);
                      } else {
                        message.error('暂无页面');
                      }
                    }}
                    type="iconExternallink_icon"
                  />
                </div>
              </div>
              {item.name && <p>{item.name}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

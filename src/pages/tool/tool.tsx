import Banner from '@/component/banner';
import styles from './tool.less';
import Tab from '@/component/tab';
import { useState, useEffect } from 'react';
import { message } from 'antd';
import originData from './data';
import Icon from '@/component/icon';

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
          tabs={[
            '全部',
            '区块链浏览器',
            '钱包',
            '运维工具',
            '基础设施',
            '其他',
          ]}
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
                    type="iconExternallink_icon"
                    onClick={() => {
                      if (item.url) {
                        window.open(item.url);
                      } else {
                        message.error('暂无页面');
                      }
                    }}
                  />
                </div>
              </div>
              <p className={styles.name}>{item.zh_name}</p>
              <p className={styles.title}>{item.zh_title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

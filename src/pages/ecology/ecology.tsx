import Banner from '@/component/banner';
import styles from './ecology.less';
import Tab from '@/component/tab';
import { useState, useEffect, useContext } from 'react';
import originData from './data';
import Icon from '@/component/icon';
import { message } from 'antd';
import language from './i18n';
import { StoreContext } from '@/context/languageContext';

export default () => {
  const { state } = useContext(StoreContext);
  const [tab, setTab] = useState<number>(0);
  const [data, setData] = useState<any[]>([]);

  // useEffect(() => {
  //   setData(originData.filter((item) => item.tab === tab + 1));
  //   console.log(tab, originData.filter((item) => item.tab === tab + 1))
  // }, [tab]);

  return (
    <div>
      <Banner title={[language[state.language]['banner']]} />
      <div className={styles.body}>
        <Tab
          tabs={[
            language[state.language]['stakingPool'],
            language[state.language]['backers'],
          ]}
          tab={tab}
          change={(tab) => {
            setTab(tab);
          }}
        />
        <div className={styles.data}>
          {originData
            .filter((item) => item.tab === tab + 1)
            .map((item, i) => (
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

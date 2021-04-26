import Banner from '@/component/banner';
import styles from './tool.less';
import Tab from '@/component/tab';
import { useState, useEffect, useContext } from 'react';
import { message } from 'antd';
import originData from './data';
import Icon from '@/component/icon';
import language from './i18n';
import { StoreContext } from '@/context/languageContext';

export default () => {
  const [tab, setTab] = useState<number>(0);
  const [data, setData] = useState<any[]>([]);
  const { state } = useContext(StoreContext);

  useEffect(() => {
    if (tab === 0) {
      setData(originData);
    } else {
      setData(originData.filter((item) => item.tab === tab));
    }
  }, [tab]);

  return (
    <div>
      <Banner title={[language[state.language]['banner']]} />
      <div className={styles.body}>
        <Tab
          tabs={[
            language[state.language]['all'],
            language[state.language]['blockchainExplorer'],
            language[state.language]['wallet'],
            language[state.language]['operations'],
            language[state.language]['infrastructure'],
            language[state.language]['others'],
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
                <div
                  className={styles.link}
                  onClick={() => {
                    if (item.url) {
                      window.open(item.url);
                    } else {
                      message.error('暂无页面');
                    }
                  }}
                >
                  <Icon type="iconExternallink_icon" />
                </div>
              </div>
              <p className={styles.name}>
                {state.language === 'zh' ? item.zh_name : item.en_name}
              </p>
              <p className={styles.title}>
                {state.language === 'zh' ? item.zh_title : item.en_title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

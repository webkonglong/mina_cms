import Banner from '@/component/banner';
import styles from './video.less';
import Tab from '@/component/tab';
import { useState, useEffect, useContext } from 'react';
import originData from './data';
import Icon from '@/component/icon';
import { history } from 'umi';
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
            language[state.language]['intruduction'],
            language[state.language]['case'],
            language[state.language]['activities'],
            '(O)1 Labs',
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
              <p>{state.language === 'zh' ? item.zh_Name : item.en_name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

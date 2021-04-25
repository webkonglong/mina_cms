import Banner from '@/component/banner';
import styles from './case.less';
import Tab from '@/component/tab';
import { useState, useEffect, useContext } from 'react';
import originData from './data.tsx';
import { history } from 'umi';
import language from './i18n';
import { StoreContext } from '@/context/languageContext';
import Icon from '@/component/icon';

export default () => {
  const [tab, setTab] = useState<number>(0);
  const [data, setData] = useState<any[]>([]);
  const { state } = useContext(StoreContext);

  useEffect(() => {
    if (tab === 0) {
      setData(originData);
    } else {
      setData(originData.filter((item: any) => item.tab === tab));
    }
  }, [tab]);

  return (
    <>
      <Banner title={[language[state.language]['banner']]} />
      <div className={styles.body}>
        <Tab
          tabs={[
            language[state.language]['all'],
            language[state.language]['developerOriented'],
            language[state.language]['ouserOriented'],
            language[state.language]['institutionoriented'],
          ]}
          tab={tab}
          change={(tab) => {
            setTab(tab);
          }}
        />

        {data.length === 0 && (
          <div className={styles.no}>
            <Icon type="iconzanwushuju" />
          </div>
        )}
        {data.map((item) => (
          <div
            key={item.id}
            className={styles.news}
            onClick={() => {
              history.push('/case-details?id=' + item.id);
            }}
          >
            <img src={item.img} alt="" />
            <div className={styles.new}>
              <div className={styles.name}>
                {state.language === 'zh' ? item.zh_name : item.en_name}
              </div>
              <div className={styles.abstract}>
                {state.language === 'zh'
                  ? item.zh_introduction
                  : item.en_introduction}
              </div>
              <div className={styles.time}>{item.time}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

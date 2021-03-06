import Banner from '@/component/banner';
import styles from './news.less';
import Tab from '@/component/tab';
import { useState, useEffect, useContext } from 'react';
import originData from './data.tsx';
import { history } from 'umi';
import { StoreContext } from '@/context/languageContext';
import language from './i18n';
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
            language[state.language]['token'],
            language[state.language]['technology'],
            language[state.language]['forums'],
            language[state.language]['case'],
          ]}
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
              if (item?.url) {
                window.open(item.url);
              } else {
                history.push('/news-details?id=' + item.id);
              }
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

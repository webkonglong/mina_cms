import styles from './home.less';
import Icon from '@/component/icon';
import { history } from 'umi';
import { useMemo, useContext } from 'react';
import { StoreContext } from '@/context/languageContext';
import language from './i18n';

export default () => {
  const { state } = useContext(StoreContext);
  const data1 = useMemo(() => {
    return [
      {
        icon: 'iconabout_icon',
        title: language[state.language]['about'],
        introduce: language[state.language]['aboutDoc'],
        url: '/',
      },
      {
        icon: 'iconEcology',
        title: language[state.language]['ecology'],
        introduce: language[state.language]['ecologyDoc'],
        url: '/ecology',
      },
      {
        icon: 'iconnews_icon',
        title: language[state.language]['news'],
        introduce: language[state.language]['newsDoc'],
        url: '/news',
      },
    ];
  }, [state, language]);

  const data2 = useMemo(() => {
    return [
      {
        icon: 'iconvideo_icon',
        title: language[state.language]['videos'],
        introduce: language[state.language]['videosDoc'],
        url: '/video',
      },
      {
        icon: 'icontool_icon',
        title: language[state.language]['tools'],
        introduce: language[state.language]['toolsDoc'],
        url: '/tool',
      },
      {
        icon: 'iconanli',
        title: language[state.language]['cases'],
        introduce: language[state.language]['casesDoc'],
        url: '/case',
      },
    ];
  }, [state, language]);

  return (
    <>
      <div className={styles.banner}>
        <div className={styles.body}>
          <p>{language[state.language]['banner']}</p>
        </div>
      </div>
      <div className={styles.menu}>
        <div className={styles.menuContent}>
          <div className={styles.menuUl} style={{ marginBottom: '30px' }}>
            {data1.map((item) => (
              <div key={item.icon} className={styles.menuItem}>
                <div className={styles.menuItemBody}>
                  <div className={styles.icon}>
                    <Icon type={item.icon} />
                  </div>
                  <div className={styles.name}>{item.title}</div>
                  <div className={styles.iconanli}>{item.introduce}</div>
                </div>
                <div className={styles.menuItemHoverBody}>
                  <div className={styles.hoverTitle}>{item.title}</div>
                  <div className={styles.btn1}>
                    <div
                      className={styles.btn2}
                      onClick={() => {
                        if (item.url === '/') {
                          window.open('https://minaprotocol.com/about');
                        } else {
                          history.push(item.url);
                        }
                      }}
                    >
                      <Icon type="iconjinru" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.menuUl}>
            {data2.map((item) => (
              <div key={item.icon} className={styles.menuItem}>
                <div className={styles.menuItemBody}>
                  <div className={styles.icon}>
                    <Icon type={item.icon} />
                  </div>
                  <div className={styles.name}>{item.title}</div>
                  <div className={styles.iconanli}>{item.introduce}</div>
                </div>
                <div className={styles.menuItemHoverBody}>
                  <div className={styles.hoverTitle}>{item.title}</div>
                  <div className={styles.btn1}>
                    <div
                      className={styles.btn2}
                      onClick={() => {
                        if (item.url === '/') {
                          window.open('https://minaprotocol.com/about');
                        } else {
                          history.push(item.url);
                        }
                      }}
                    >
                      <Icon type="iconjinru" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

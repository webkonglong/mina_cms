import styles from './home.less';
import Icon from '@/component/icon';
import { history } from 'umi';

const data1 = [
  {
    icon: 'iconabout_icon',
    title: '关于',
    introduce: 'MINA 介绍.',
    url: '/',
  },
  {
    icon: 'iconEcology',
    title: '生态',
    introduce: "We're on a mission.",
    url: '/ecology',
  },
  {
    icon: 'iconnews_icon',
    title: '新闻',
    introduce: '了解 Mina 最新动态.',
    url: '/news',
  },
];

const data2 = [
  {
    icon: 'iconvideo_icon',
    title: '视频',
    introduce: '畅享 YouTube 最新视频资料.',
    url: '/video',
  },
  {
    icon: 'icontool_icon',
    title: '工具',
    introduce: '工具在手,项目我有.',
    url: '/tool',
  },
  {
    icon: 'iconanli',
    title: '案例',
    introduce: '典型案例，深度刨析.',
    url: '/case',
  },
];

export default () => {
  return (
    <>
      <div className={styles.banner}>
        <div className={styles.body}>
          <p>Mina 是一个旨在传达区块链初心的</p>
          <p>底层协议——真正的去中心化、可拓展和安全。</p>
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
                        history.push(item.url);
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
                        history.push(item.url);
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

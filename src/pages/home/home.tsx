import styles from './home.less';

const data = [
  {
    icon: '1',
    title: '关于',
    introduce: 'MINA 介绍.',
  },
  {
    icon: '2',
    title: '生态',
    introduce: 'MINA 生态.',
  },
  {
    icon: '3',
    title: '新闻',
    introduce: '了解 Mina 最新动态.',
  },
  {
    icon: '4',
    title: '视频',
    introduce: '畅享 YouTube 最新视频资料.',
  },
  {
    icon: '5',
    title: '工具',
    introduce: '工具在手,项目我有.',
  },
  {
    icon: '6',
    title: '案例',
    introduce: '典型案例，深度刨析.',
  },
];

export default () => {
  return (
    <div className="body">
      <div className={styles.body}>1111</div>
    </div>
  );
};

const data = {
  id: 2,
  tab: 0,
  img: '/test/test.jpg',
  name: 'Mina融资历程及Coinlist认购的详细解读（重点推荐）',
  time: '2021-03-26',
  abstract:
    'Mina在Coinlist的认购参与时间为北京时间2021年4月13日晚上10点-15日早上8点。',
  body: (
    <>
      <p>
        2021 年 3 月 23 日，历经近 3 年的开发和测试，由 O(1) Labs
        团队主导开发的轻量级区块链 Mina（原 Coda）上线主网
      </p>
      <img src="/news/1-1.jpg" alt="" />
      <p>
        Mina 协议基于零知识证明 ZK-SNARKs(被 V 神力荐)
        开发，它可以将区块链的大小从几百 GB 压缩到只有惊人的
        22KB——相当于两条推文的大小，由于极其轻便，终端用户直接用手机即可运行验证
        Mina 的主网和节点
      </p>
      <p>
        相比于其他尚未工程落地的「纸面项目」，Mina 经过多年积淀目前已拥有超 120
        个国家或地区的 10 万余个支持者和验证者。
      </p>
      <p>
        2021 年 4 月 13 日-15 日，Mina 将在被誉为「区块链项目风向标」的 CoinList
        进行代币公开销售，符合要求的用户将有机会买到最多 1000 美元的相应代币。
      </p>
      <h2>融资历程</h2>
      <p>
        自 2017 年 6 月开发以来，Mina 的开发团队O(1) Labs已经完成三轮融资，总计
        2940 万美元。
      </p>
      <p>
        其中，早在 2018 年 5 月，Mina 完成 350
        万种子轮融资，这部分出售的代币价格为 0.07 美元，这部分代币有 18
        个月锁定期；2019 年 4 月，Mina 完成 1500 万美元 A
        轮融资，这部分出售的代币价格为 0.15 美元，同样有 18 个月的锁定期。
      </p>
      <p>
        到了 2020 年 10 月，Mina 完成 1090
        万美元战略融资，此部分代币解锁方式分为两种：价格为 0.15 美元的代币有 18
        个月锁定期，占比 52%（约 2863 万枚）；价格为 0.25
        美元的代币与社区销售同时解锁，即 5 月 31 日解锁，占比 48%（约 2642
        万枚）。
      </p>
      <p>
        参投机构和机构众多，不乏 Polychain、Paradigm、Coinbase Ventures
        等知名机构，项目顾问包括 CoinList 的 CEO Andy Bromberg 以及 bulletproof
        的发明者 Benedikt Bünz，具体投资机构名单如下图所示：
      </p>
      <img src="/news/1-2.jpg" alt="" />
      <h2>代币分配方案</h2>
      <p>
        如下图，MINA 代币初始发行量 10 亿枚，第一年以 12%
        的速度增加；所有代币将在 8
        年内逐步解锁释放。更多信息可点击文末的白皮书链接查看。
      </p>
      <img src="/news/1-3.jpg" alt="" />
      <h2>Mina 认购详情</h2>
      <p>
        根据要求，此次 Mina
        公开售卖仅面向特定司法管辖区内的非美国、非中国和非加拿大参与者（已破解），完整规定可登陆网站https://coinlist.co/mina查看。
      </p>
      <p>
        以下为重点摘录的信息。此次认购共分 2
        轮：只有在社区销售结束还有相应的份额，才会开放无上限的销售注册，而按照当下火爆的市场情况和投资者情绪看，应该不会出现后者。
      </p>
      <p>
        从下图来看，公开销售开启时间为北京时间 2021 年 4 月 13 日 22 时整时-2021
        年 4 月 15 日 7 时 59 分。此次销售代币总量为 7500 万枚
        MINA，每个账号参投金额最高 1 千美金，代币将在 5 月 31 日解锁
      </p>
      <p>
        此外，官方表示为鼓励用户质押，通过 CoinList 参投 MINA
        的用户将额外获得比常规质押更高比例的质押奖励，具体可查看网站：https://coinlist.co/mina
      </p>
      <img src="/news/1-4.jpg" alt="" />
      <p>
        小结：本次mina总共在coinlist认购75000000枚，单枚0.25$，总共价值18750000$。如果按照每人都认购1000$计算，会有18750名幸运儿抢到mina
        ，同时需要注意的是，近期coinlist注册用户已达20万人。
      </p>
    </>
  ),
};
import { useLocation } from 'umi';
import styles from './news.less';

export default () => {
  return (
    <div className={styles.details}>
      <div className={styles.title}>{data.name}</div>
      <div className={styles.time}>{data.time}</div>
      <div className="news-details">{data.body}</div>
    </div>
  );
};

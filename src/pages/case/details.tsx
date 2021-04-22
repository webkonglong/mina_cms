import originData from './data.tsx';
import styles from './case.less';
import { useLocation } from 'umi';
import { useState, useEffect } from 'react';

export default () => {
  const location = useLocation();
  const [data, setData] = useState<string>('');

  useEffect(() => {
    if (location?.query?.id) {
      const data = originData.find((item) => +item.id === +location?.query?.id);
      setData(data);
      const onPlayerReady = (event) => {
        event.target.playVideo();
      };

      setTimeout(() => {
        if (
          typeof window.YT !== 'undefined' &&
          window.YT.Player &&
          document.getElementById('case-player')
        ) {
          new window.YT.Player('case-player', {
            height: '788',
            width: '1400',
            videoId: data?.url,
            events: {
              onReady: onPlayerReady,
            },
          });
        }
      }, 2000);
    }
  }, [location]);

  return (
    <div className={styles.player}>
      <div className={styles.body}>
        <div id="case-player">
          <div className={styles.loading}>视频正在加载中...</div>
        </div>
        <p>{data?.time}</p>
        {data?.zh_body}
      </div>
    </div>
  );
};

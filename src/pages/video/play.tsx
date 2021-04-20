import { useEffect, useState } from 'react';
import styles from './video.less';
import originData from './data';
import { useLocation } from 'umi';
export default () => {
  const location = useLocation();
  const [name, setName] = useState<string>('');

  useEffect(() => {
    if (location?.query?.id) {
      const data = originData.find(
        (item) => item.video === location?.query?.id,
      );
      setName(data?.name || '');
      const onPlayerReady = (event) => {
        event.target.playVideo();
      };

      setTimeout(() => {
        if (
          typeof window.YT !== 'undefined' &&
          window.YT.Player &&
          document.getElementById('player')
        ) {
          new window.YT.Player('player', {
            height: '788',
            width: '1400',
            videoId: data?.video,
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
      <div id="player">
        <div className={styles.loading}>视频正在加载中...</div>
      </div>
      <p className={styles.playerDoc}>{name}</p>
    </div>
  );
};

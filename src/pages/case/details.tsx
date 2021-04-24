import originData from './data.tsx';
import styles from './case.less';
import { useLocation } from 'umi';
import { useState, useEffect, useContext } from 'react';
import { StoreContext } from '@/context/languageContext';
import VideoLoading from '@/component/videoLoading';

export default () => {
  const location = useLocation();
  const [data, setData] = useState<string>('');
  const { state } = useContext(StoreContext);

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
        <div className="video-player-box">
          <VideoLoading />
          <div id="case-player" className="video-player"></div>
        </div>
        <p>{data?.time}</p>
        {state.language === 'zh' ? data?.zh_body : data?.en_body}
      </div>
    </div>
  );
};

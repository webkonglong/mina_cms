import { useEffect, useState, useContext } from 'react';
import styles from './video.less';
import originData from './data';
import { useLocation } from 'umi';
import { StoreContext } from '@/context/languageContext';
import VideoLoading from '@/component/videoLoading';
export default () => {
  const location = useLocation();
  const [name, setName] = useState<string>('');
  const { state } = useContext(StoreContext);

  useEffect(() => {
    if (location?.query?.id) {
      const data = originData.find((item) => +item.id === +location?.query?.id);
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
            videoId: data?.url,
            events: {
              onReady: onPlayerReady,
            },
          });
        }
      }, 2000);
    }
  }, [location]);

  useEffect(() => {
    if (location?.query?.id) {
      const data = originData.find((item) => +item.id === +location?.query?.id);
      setName(
        data?.zh_Name
          ? state.language === 'zh'
            ? data.zh_Name
            : data.en_name
          : '',
      );
    }
  }, [location, state]);

  return (
    <div className={styles.player}>
      <div className="video-player-box">
        <VideoLoading />
        <div id="player" className="video-player"></div>
      </div>
      <p className={styles.playerDoc}>{name}</p>
    </div>
  );
};

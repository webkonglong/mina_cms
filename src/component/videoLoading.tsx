import Icon from './icon';
import { StoreContext } from '@/context/languageContext';
import { useContext } from 'react';
export default () => {
  const { state } = useContext(StoreContext);

  return (
    <div className="c-video-loading">
      <Icon className="c-video-loading-icon" type="iconjiazaizhong1" />
      <p className="c-video-loading-newwork">
        {state.language === 'zh'
          ? '视频需要vpn网络,请确认已打开vpn网络'
          : 'The video needs a VPN network. Please confirm that the VPN network is turned on'}
      </p>
    </div>
  );
};

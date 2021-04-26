import { useState, useContext, useEffect } from 'react';
import { StoreContext } from '@/context/languageContext';
import Icon from './icon';

export default () => {
  const { state } = useContext(StoreContext);
  const [isError, toggle] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      toggle(true);
    }, 1000 * 60 * 5);
  }, []);

  return (
    <div className="c-video-loading">
      <Icon className="c-video-loading-icon" type="iconjiazaizhong1" />
      <p>
        {isError
          ? state.language === 'en'
            ? 'Loading failed'
            : '加载失败'
          : state.language === 'en'
          ? 'loading'
          : '加载中'}
      </p>
    </div>
  );
};

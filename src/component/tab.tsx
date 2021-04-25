import { useContext } from 'react';
import { StoreContext } from '@/context/languageContext';

interface Props {
  tabs: string[];
  change: (tab: number) => void;
  tab: number;
}

export default ({ tab, tabs, change }: Props) => {
  const { state } = useContext(StoreContext);

  return (
    <div className="c-tab">
      {tabs.map((item, i) => (
        <span
          key={i}
          className={i === tab ? 'c-active-tab' : ''}
          onClick={() => {
            change(i);
          }}
        >
          {item}
        </span>
      ))}
      <span className="c-tab-vpn">
        {state.language === 'zh'
          ? '需要使用VPN网络'
          : 'Need to use VPN network'}
      </span>
    </div>
  );
};

interface Props {
  tabs: string[];
  change: (tab: number) => void;
  tab: number;
}

export default ({ tab, tabs, change }: Props) => {
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
    </div>
  );
};

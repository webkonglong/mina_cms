export default (props: { title: string[] }) => {
  return (
    <div className="c-min-banner">
      <div>{props.title[0]}</div>
    </div>
  );
};

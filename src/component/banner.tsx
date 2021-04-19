export default (props: { title: string[] }) => {
  return (
    <div className="c-min-banner">
      <p>{props.title[0]}</p>
      {props.title.length === 2 && <p>{props.title[1]}</p>}
    </div>
  );
};

// export default function Modal(...props) {
export default function Modal(props) {
  const { index, title, date, setTitle } = props;

  const content = 'props.content';
  return (
    <div className='modal'>
      <h4>{title[index]}</h4>
      <p>{date[index]}</p>
      <p>{content}</p>
      <button
        onClick={() => {
          let copy = [...title];
          copy[index] = 'test';
          setTitle(copy);
        }}
      >
        settitle
      </button>
    </div>
  );
}

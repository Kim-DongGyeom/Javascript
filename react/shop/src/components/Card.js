export default function Card(props) {
  const { item, idx } = props;
  return (
    <div className='col-md-4'>
      <img
        src={'https://codingapple1.github.io/shop/shoes' + (idx + 1) + '.jpg'}
        width='80%'
        alt=''
      />
      <h4>{item.title}</h4>
      <p>{item.content}</p>
      <p>{item.price}</p>
    </div>
  );
}

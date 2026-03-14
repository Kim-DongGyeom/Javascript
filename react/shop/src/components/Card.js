export default function Card(props) {
  const { item } = props;
  return (
    <div className='col-md-4'>
      <img
        src={
          'https://codingapple1.github.io/shop/shoes' + (item.id + 1) + '.jpg'
        }
        width='80%'
        alt=''
      />
      <h4>{item.title}</h4>
      <p>{item.content}</p>
      <p>{item.price}円</p>
    </div>
  );
}

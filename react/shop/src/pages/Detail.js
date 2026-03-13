export default function Detail(props) {
  const { item, idx } = props;
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6'>
          <img
            src={
              'https://codingapple1.github.io/shop/shoes' + (idx + 1) + '.jpg'
            }
            width='80%'
            alt=''
          />
          <div className='col-md-6 mt-4'>
            <h4 className='pt-5'>{item.title}</h4>
            <p>{item.content}</p>
            <p>{item.price}</p>
            <button className='btn btn-danger'>注文</button>
          </div>
        </div>
      </div>
    </div>
  );
}

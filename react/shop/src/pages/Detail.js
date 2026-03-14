import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import styled from 'styled-components';
// ロード

// let YellowBtn = styled.button`
//   background: ${(props) => (props.bg == 'blue' ? 'white' : 'black')};
//   color: black;
//   padding: 10px;
// `;

// let Box = styled.div`
//   background: gray;
//   padding: 20px;
// `;

export default function Detail(props) {
  const [count, setCount] = useState(0);
  const [alertState, setAlertState] = useState(true);
  const [num, setNum] = useState(0);

  const { id } = useParams();
  const { item } = props;

  let findItem = item.find((v) => {
    return v.id === Number(id);
  });

  useEffect(() => {
    // server data, timer, 複雑な計算
    let a = setTimeout(() => {
      setAlertState(false);
    }, 2000);
    return () => {
      clearTimeout(a);
    };
  }, []);
  useEffect(() => {
    if (isNaN(num)) {
      alert('数値のみ入力してください。');
      return setNum();
    }
  }, [num]);

  return (
    <div className='container'>
      {/* <Box> */}
      {/* <YellowBtn bg='blue' /> */}
      {/* <YellowBtn bg='orange' /> */}
      {/* </Box> */}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {count}
      </button>
      {alertState ? (
        <div className='alert alert-warning' id='warningMSG'>
          2秒以内に購入し割引
        </div>
      ) : (
        ''
      )}
      <div className='row'>
        <div className='col-md-6'>
          <img
            src={
              'https://codingapple1.github.io/shop/shoes' +
              (Number(id) + 1) +
              '.jpg'
            }
            width='100%'
            alt=''
          />
          <div className='col-md-6 mt-4'>
            <input
              onChange={(e) => {
                // if (isNaN(e.target.value)) {
                //   e.target.value = '';
                // }
                setNum(e.target.value);
              }}
            />
            <h4 className='pt-5'>{findItem.title}</h4>
            <p>{findItem.content}</p>
            <p>{findItem.price}円</p>
            <button className='btn btn-danger'>注文</button>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

import { Context1 } from './../App.js';

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
  //   const [count, setCount] = useState(0);
  const [alertState, setAlertState] = useState(true);
  const [tab, setTab] = useState(0);
  const [fade, setFade] = useState('');
  //   const [num, setNum] = useState(0);

  const { id } = useParams();
  const { item } = props;

  //
  useEffect(() => {
    return () => {
      setFade('end');
    };
  });
  //

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
  //   useEffect(() => {
  //     if (isNaN(num)) {
  //       alert('数値のみ入力してください。');
  //       return setNum();
  //     }
  //   }, [num]);

  return (
    <div className={'container' + ' ' + 'start' + ' ' + fade}>
      {/* <Box> */}
      {/* <YellowBtn bg='blue' /> */}
      {/* <YellowBtn bg='orange' /> */}
      {/* </Box> */}
      {/* <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {count}
      </button> */}
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
        </div>

        <div className='col-md-6'>
          {/* <input
              onChange={(e) => {
                // if (isNaN(e.target.value)) {
                //   e.target.value = '';
                // }
                setNum(e.target.value);
              }}
            /> */}
          <h4 className='pt-5'>{findItem.title}</h4>
          <p>{findItem.content}</p>
          <p>{findItem.price}円</p>
          <button className='btn btn-danger'>注文</button>
        </div>
      </div>
      <Nav variant='tabs' defaultActiveKey='link0'>
        <Nav.Item>
          <Nav.Link
            eventKey='link0'
            onClick={() => {
              setTab(0);
            }}
          >
            btn0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey='link1'
            onClick={() => {
              setTab(1);
            }}
          >
            btn1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey='link2'
            onClick={() => {
              setTab(2);
            }}
          >
            btn2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tab={tab} shoes={props.item} />
    </div>
  );
}

function TabContent({ tab, shoes }) {
  let { stock } = useContext(Context1);
  console.log(stock[tab]);
  //   const { tab } = props;
  //   if (tab == 0) {
  //     return <div>info0</div>;
  //   }
  //   if (tab == 1) {
  //     return <div>info1</div>;
  //   }
  //   if (tab == 2) {
  //     return <div>info2</div>;
  //   }
  const [fade, setFade] = useState('');
  useEffect(() => {
    let a = setTimeout(() => {
      setFade('end');
    }, 100);
    return () => {
      clearTimeout(a);
      setFade('');
    };
  }, [tab]);
  return (
    <div className={'start' + ' ' + fade}>
      <div>{shoes[tab].title}</div>
      <div>{stock[tab]}</div>
    </div>
  );
}

// /* eslint-disable */

import { useState } from 'react';
import { AiOutlineLike } from 'react-icons/ai';

import Modal from './Components/modal';
import Profile from './Components/Profile';

import './App.css';

function App() {
  // start 12
  const [title, setTitle] = useState([
    'おすすめのラーメン',
    'おすすめのファッション',
    'おすすめのカフェ',
  ]);
  const [date, setDate] = useState([
    '2026年3月21日 10:30',
    '2026年7月29日 14:00',
    '2026年8月17日 15:40',
  ]);

  const [likes, setLikes] = useState([0, 0, 0]);
  const [modal, setModal] = useState(false);
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');

  const addArr = () => {
    if (text === '') {
      alert('追加する内容がありません。');
      return;
    }
    let today = new Date();

    let copyTitle = [...title];
    let copyLikes = [...likes];
    let copyDate = [...date];

    copyDate.unshift(
      today.getFullYear() +
        '年' +
        today.getMonth() +
        '月' +
        today.getDay() +
        '日 ' +
        today.getHours() +
        ':' +
        today.getMinutes(),
    );
    copyTitle.unshift(text);
    copyLikes.unshift(0);
    setDate(copyDate);
    setTitle(copyTitle);
    setLikes(copyLikes);
  };

  const delArr = (idx) => {
    let copyTitle = [...title];
    let copyLikes = [...likes];
    copyTitle.splice(idx, 1);
    copyLikes.splice(idx, 1);
    setTitle(copyTitle);
    setLikes(copyLikes);
  };

  return (
    <div className='App'>
      <div className='black-nav'>
        <h4>ReactApp-Blog</h4>
      </div>
      {title
        ? title.map((item, idx) => {
            return (
              <div
                className='list'
                key={idx}
                onClick={() => {
                  setModal(true);
                  setIndex(idx);
                }}
              >
                <h4>
                  {item + '  '}
                  <AiOutlineLike
                    onClick={(e) => {
                      let copy = [...likes];
                      copy[idx] = likes[idx] + 1;
                      setLikes(copy);
                    }}
                  />
                  {likes[idx]}
                </h4>
                <p>{date[idx]}</p>
                <button
                  type='button'
                  onClick={() => {
                    delArr(idx);
                  }}
                >
                  削除
                </button>
              </div>
            );
          })
        : ''}
      <input
        type='text'
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        type='button'
        onClick={() => {
          addArr();
        }}
      >
        追加
      </button>

      {/* <Modal props={detail} /> */}
      {modal ? (
        <Modal index={index} title={title} date={date} setTitle={setTitle} />
      ) : null}
      <div>
        {/* state練習 */}
        {/*
        // 配列orオブジェクト系のuseState変更について
        <button
          type='button'
          onClick={(e) => {
            let copyArr = [...title];
            copyArr[0] = 'test';
            setTitle(copyArr);
          }}
        >
          titleUpdate
        </button>
        */}
        {/*
        // 配列orオブジェクト系のuseState並び替えについて
        <button
          type='button'
          onClick={(e) => {
            let copyArr = [...title];
            copyArr.sort();
            setTitle(copyArr);
          }}
        >
        並び替え
        </button>
        */}

        {/* class形式 */}
        <Profile />
      </div>
    </div>
  );
}

export default App;

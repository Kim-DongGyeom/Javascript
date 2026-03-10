// /* eslint-disable */

import { useState } from 'react';
import { AiOutlineLike } from 'react-icons/ai';

import Modal from './Components/modal';

import './App.css';

function App() {
  const [title, setTitle] = useState([
    'おすすめのラーメン',
    'おすすめのファッション',
    'おすすめのカフェ',
  ]);

  const [likes, setLikes] = useState([0, 0, 0]);
  const [modal, setModal] = useState(false);
  const [index, setIndex] = useState(0);

  const detail = {
    title: '글제목',
    date: '2026/03/10',
    content: '내용',
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
                  setModal(!modal);
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
                <p>2月17日発行</p>
              </div>
            );
          })
        : ''}
      {/* <Modal props={detail} /> */}
      {modal ? <Modal index={index} title={title} setTitle={setTitle} /> : null}

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
      </div>
    </div>
  );
}

export default App;

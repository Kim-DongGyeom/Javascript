// Library
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';

// file
import './App.css';
import data from './utils/data';

// components
import Navigation from './components/Navigation';
import Card from './components/Card';
import Detail from './pages/Detail';
import NotFound from './pages/NotFound';
// import About from './pages/About';
// import Event from './pages/Event';

function App() {
  const color = 'light';
  const [shoes, setShoes] = useState(data);
  const [toggle, setToggle] = useState(false);

  return (
    <div className='App'>
      <Navigation color={color} />

      <Routes>
        <Route
          path='/'
          element={
            <div>
              <div className='main-bg'></div>
              <div className='container'>
                <div className='row'>
                  {shoes
                    ? shoes.map((item, idx) => {
                        return <Card item={item} key={'key' + idx} />;
                      })
                    : ''}
                </div>
              </div>
              {!toggle ? (
                <button
                  onClick={() => {
                    axios
                      .get('https://codingapple1.github.io/shop/data2.json')
                      //   .get('test')
                      .then((result) => {
                        // console.log(result.data);
                        /* step 1 */
                        // let copy = [...shoes];
                        // copy.push(...result.data);
                        /* step 2 */
                        let copy = [...shoes, ...result.data];
                        setShoes(copy);
                      })
                      .catch((err) => {
                        console.log(err);
                      });

                    // setToggle(true);
                  }}
                >
                  もっと見る
                </button>
              ) : (
                ''
              )}
            </div>
          }
        />

        <Route path='/detail/:id' element={<Detail item={shoes} key={1} />} />

        {/*
        <Route path='/about' element={<About />}>
          <Route path='member' element={<div>member</div>} />
          <Route path='location' element={<div>location</div>} />
        </Route>
        */}

        {/*
        <Route path='/event' element={<Event />}>
          <Route path='one' element={<div>one</div>} />
          <Route path='two' element={<div>two</div>} />
        </Route>
        */}

        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

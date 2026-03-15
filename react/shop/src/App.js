// Library
import { createContext, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';

// file
import './App.css';
import data from './utils/data';

// components
import Navigation from './components/Navigation';
import Card from './components/Card';
import Cart from './pages/Cart';
import Detail from './pages/Detail';
import NotFound from './pages/NotFound';
// import About from './pages/About';
// import Event from './pages/Event';

export let Context1 = createContext();

function App() {
  const color = 'light';
  const [shoes, setShoes] = useState(data);

  const [stock, setStock] = useState([10, 11, 12]);
  const [toggle, setToggle] = useState(false);
  const [loading, setloading] = useState(false);

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
              {loading ? <div>loading</div> : ''}
              {!toggle ? (
                <button
                  onClick={() => {
                    setloading(true);
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
                        setToggle(true);
                        setloading(false);
                      })
                      .catch((err) => {
                        console.log(err);
                        setloading(false);
                      });

                    //   post
                    // axios.post('/url', { name: 'kim' });

                    // 同時get step1
                    // axios.get('/url1');
                    // axios.get('/url2');

                    // 同時get step1
                    // Promise.all([axios.get('/url1'), axios.get('/url2')])
                    //   .then(() => {})
                    //   .catch((err) => {
                    //     console.log(err);
                    //   });
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

        <Route
          path='/detail/:id'
          element={
            <Context1.Provider value={{ stock }}>
              <Detail item={shoes} key={1} />
            </Context1.Provider>
          }
        />

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
        <Route path='/cart' element={<Cart />}></Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

// Library
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

// file
import './App.css';
import data from './utils/data';

// components
import Navigation from './components/Navigation';
import Card from './components/Card';
import Detail from './pages/Detail';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Event from './pages/Event';

function App() {
  const color = 'light';
  const [shoes] = useState(data);

  return (
    <div className='App'>
      <Navigation color={color} />

      <Routes>
        <Route
          path='/'
          element={
            <div className='row'>
              <div className='main-bg'></div>
              {shoes
                ? shoes.map((item, idx) => {
                    return <Card item={item} idx={idx} key={'key' + idx} />;
                  })
                : ''}
            </div>
          }
        />
        <Route
          path='/detail'
          element={<Detail item={shoes[0]} idx={0} key={1} />}
        />
        <Route path='/about' element={<About />}>
          <Route path='member' element={<div>member</div>} />
          <Route path='location' element={<div>location</div>} />
        </Route>
        <Route path='/event' element={<Event />}>
          <Route path='one' element={<div>one</div>} />
          <Route path='two' element={<div>two</div>} />
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

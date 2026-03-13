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
          path='detail'
          element={<Detail item={shoes[0]} idx={0} key={1} />}
        />
        <Route path='/about' element={<About />}>
          <Route path='member' element={<div>test</div>} />
          <Route path='location' element={<About />} />
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

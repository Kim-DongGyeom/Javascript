// react
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

// components
import Navigation from './components/Navigation';
import Product from './components/Product';

// file
import './App.css';
import data from './utils/data';

function App() {
  const color = 'light';
  const [shoes] = useState(data);

  return (
    <div className='App'>
      <Routes>
        <Route />
        <Route />
        <Route />
        <Route />
      </Routes>

      <Navigation color={color} />
      <div className='row'>
        <div className='main-bg'></div>
        {shoes
          ? shoes.map((item, idx) => {
              return <Product item={item} idx={idx} key={'key' + idx} />;
            })
          : ''}
      </div>
    </div>
  );
}

export default App;

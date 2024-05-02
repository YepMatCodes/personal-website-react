import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { isMobile } from 'react-device-detect';

import './App.scss';

import './css/icons.css' // lineicons support
import './css/fira_code.css'

// Pages
import Home from './pages/Home'


function App() {
  useEffect( () => {
    document.title = 'Mathew Norman';
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './MobileApp.css'
import Home from './pages/Home'
import MobileHome from './pages/MobileHome'
import './css/icons.css'
import { isMobile } from 'react-device-detect';

function App() {
  if (isMobile) {
    return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MobileHome />}>
          <Route index element={<MobileHome />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    );
  } else {
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
}

export default App;
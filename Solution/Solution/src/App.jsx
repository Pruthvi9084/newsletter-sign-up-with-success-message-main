// src/router.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Frontpage from './frontPage';
import SecondPage from './SecondPage';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Frontpage />} />  {/* Specify the element prop */}
        <Route path="/secondpage/:email" element={<SecondPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;

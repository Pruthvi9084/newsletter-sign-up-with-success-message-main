// src/main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';  // Updated import
import AppRouter from './App'

createRoot(document.getElementById('root')).render(<AppRouter />);

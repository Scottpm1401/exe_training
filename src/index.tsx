import './styles/global.css';

import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './pages/Home';
import theme from './theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </ChakraProvider>
  </React.StrictMode>
);

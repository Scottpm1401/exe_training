import './styles/global.css';

import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import AuthProvider from './layout/AuthProvider';
import Footer from './layout/Footer';
import Nav from './layout/Nav';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { persistor, store } from './redux/store';
import theme from './theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <ChakraProvider theme={theme}>
          <AuthProvider>
            <Router>
              <Nav />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
              </Routes>
              <Footer />
            </Router>
          </AuthProvider>
        </ChakraProvider>
      </React.StrictMode>
    </PersistGate>
  </Provider>
);

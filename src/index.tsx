import './styles/global.css';
import 'react-datepicker/dist/react-datepicker.css';

import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import AuthProvider from './layout/AuthProvider';
import AuthRoute from './layout/AuthRoute';
import Footer from './layout/Footer';
import Nav from './layout/Nav';
import ProtectedRoute from './layout/ProtectedRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
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
                <Route
                  path='/login'
                  element={
                    <AuthRoute>
                      <Login />
                    </AuthRoute>
                  }
                />
                <Route
                  path='/signup'
                  element={
                    <AuthRoute>
                      <Signup />
                    </AuthRoute>
                  }
                />
                <Route
                  path='/profile'
                  element={
                    <ProtectedRoute>
                      <Profile />
                    </ProtectedRoute>
                  }
                />
              </Routes>
              <Footer />
            </Router>
          </AuthProvider>
        </ChakraProvider>
      </React.StrictMode>
    </PersistGate>
  </Provider>
);

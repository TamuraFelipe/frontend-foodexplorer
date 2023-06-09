import React from 'react';
import ReactDOM from 'react-dom/client';

import GlobalStyles from './styles/global';
import { ThemeProvider } from 'styled-components';

import { AuthProvider } from './hooks/auth';
import { CartProvider } from './hooks/cart';
import { FavoriteProvider } from './hooks/favorites';

import { Routes } from './routes';

import theme from './styles/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <FavoriteProvider>
          <CartProvider>
            <Routes />   
          </CartProvider> 
        </FavoriteProvider>
      </AuthProvider>            
    </ThemeProvider>
  </React.StrictMode>,
)

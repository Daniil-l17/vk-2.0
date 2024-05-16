import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/global.scss';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { MainRouter } from './Router/MainRouter.tsx';
import { ReduxProvader } from './provader/reduxProvader/ReduxProvader.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider defaultColorScheme="dark">
      <ReduxProvader>
      <MainRouter/>
      </ReduxProvader>
    </MantineProvider>
  </React.StrictMode>,
);

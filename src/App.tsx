import React from 'react';
import Router from 'Router';

import { BrowserRouter } from 'react-router-dom';

import AppLayout from 'layouts/AppLayout/AppLayout';

const App = () => {
  return (
    <AppLayout>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AppLayout>
  );
};

export default App;

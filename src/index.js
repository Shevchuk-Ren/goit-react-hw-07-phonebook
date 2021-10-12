import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css';
import App from './components/App/App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store.store}>
      <PersistGate loading="Loading..." persistor={store.persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

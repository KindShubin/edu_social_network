import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './data/store/state';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));



const reRender = (state) => {

  root.render(
    <React.StrictMode>
      <App state={state} dispatch={store.dispatch.bind(store)}/>
      {/* <RouterProvider router={router} /> */}
    </React.StrictMode>
  );
};

store.subscribe(reRender);
reRender(store.getState());

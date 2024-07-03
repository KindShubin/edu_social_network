import React from 'react';
import ReactDOM from 'react-dom/client';
// import store from './data/store/store';
import store from './data/store/redux-store';
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

// store.subscribe(reRender);
store.subscribe(() => {
  reRender(store.getState());
});
reRender(store.getState());

import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './data/state';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));



const reRender = () => {
  root.render(
    <React.StrictMode>
      <App store={store}/>
      {/* <RouterProvider router={router} /> */}
    </React.StrictMode>
  );
}
store.subscribe(reRender);
reRender();

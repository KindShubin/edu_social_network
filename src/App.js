import s from './app.module.css';
import Header from './components/header/header';
import Navigation from './components/navigation/navigation';
import Body from './components/body/body';
import { BrowserRouter } from "react-router-dom";

function App( {store} ) {

  return (
    <div className={s.wrapper}>
      <BrowserRouter >
        <Header />
        <Navigation />
        <Body data={store.getState()} dispatch={store.dispatch.bind(store)}/>
        {/* <Body data={store.getState()} dispatch={(action) => store.dispatch(action)}/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;

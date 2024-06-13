import s from './app.module.css';
import Header from './components/header/header';
import Navigation from './components/navigation/navigation';
import Body from './components/body/body';
import { BrowserRouter } from "react-router-dom";

function App( {state, dispatch} ) {

  return (
    <div className={s.wrapper}>
      <BrowserRouter >
        <Header />
        <Navigation />
        <Body data={state} dispatch={dispatch}/>
        {/* <Body data={store.getState()} dispatch={(action) => store.dispatch(action)}/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;

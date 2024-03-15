import s from './App.module.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Body from './components/Body/Body';

function App() {
  return (
    <div className={s.wrapper}>
      <Header />
      <Navigation />
      <Body />
    </div>
  );
}

export default App;

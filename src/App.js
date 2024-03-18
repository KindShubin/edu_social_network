import s from './app.module.css';
import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';
import Body from './components/body/profile/Profile';

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

import s from './app.module.css';
import Header from './components/header/header';
import Navigation from './components/navigation/Navigation';
import Body from './components/body/profile/profile';

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

import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/Navigations/Navigation';
import HomePage from './customer/pages/Homepage/homepage';

function App() {
  return (
    <div className="">
      <Navigation />
      <div>
        <HomePage />
      </div>
    </div>
  );
}

export default App;

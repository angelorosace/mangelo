import './App.css';
import Header from './components/header/header';
import Home from './Screens/Home/Home';
import Services from './Screens/Services/Services';
import Sponsors from './Screens/Sponsors/Sponsors';
import About from './Screens/About/About';
import Contact from './Screens/Contact/Contact';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className='appContainer'>
      <Header></Header>
      <Home></Home>
      <Services></Services>
      <Sponsors></Sponsors>
      <About></About>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;

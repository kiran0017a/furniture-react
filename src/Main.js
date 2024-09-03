import './App.css';
import Header from './Header';
import Project from './Project';

import Navigation from './Navigation';
import Footer from './Footer';

function Main() {
  return (
    <div>
      <Navigation/>
      <Header></Header>
      
      <Project></Project>
      
      <Footer></Footer>
      
    </div>
  );
}

export default Main;

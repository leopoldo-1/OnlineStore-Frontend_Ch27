// import logo from './logo.svg';
import NavBar from './components/navBar'
import Footer from './components/footer'
import Catalog from './components/catalog'
import About from './components/about'
import Todo from './components/todo'
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>

      <Catalog></Catalog>

      <About></About>

      <Todo></Todo>

      <Footer></Footer>
    </div>
  );
}

export default App;

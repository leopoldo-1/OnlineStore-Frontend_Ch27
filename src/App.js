// import logo from './logo.svg';
import About from './components/about'
import Admin from './components/Admin'
import Cart from './components/Cart'
import Catalog from './components/catalog'
import Footer from './components/footer'
import Home from './components/Home'
import NavBar from './components/navBar'
import Todo from './components/todo'
// import Parent from './components/Parent'
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import GlobalStoreProvider from './context/globalStoreProvider'

import {BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <GlobalStoreProvider>
        <BrowserRouter>
          <NavBar></NavBar>

          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/admin" element={<Admin/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/catalog" element={<Catalog/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/shopingList" element={<Todo/>} />
            {/* <Route path="/admin" element={<Admin/>} /> */}
          </Routes>

          <Footer></Footer>
        </BrowserRouter>
      </GlobalStoreProvider>
    </div>
  );
}

export default App;

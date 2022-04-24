import * as React from 'react';
import './App.css';
import Login from "./components/landing/Login";
import Register from "./components/landing/Register";
import About from "./components/landing/About";
import Support from "./components/landing/Support";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./components/landing/Home";
import Header from "./components/landing/Header";
import Footer from "./components/landing/Footer";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home/>}>
                </Route>
                <Route path='/login' element={<Login/>}>
                </Route>
                <Route path='/register' element={<Register/>}>
                </Route>
                <Route path='/about' element={<About/>}>
                </Route>
                <Route path='/support' element={<Support/>}>
                </Route>
            </Routes>
            <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;

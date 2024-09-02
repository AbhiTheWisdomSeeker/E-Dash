import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer.js';
import SignUP from './components/SignUp.js';
import './components/PrivateCom';
import Private from './components/PrivateCom';
import Login from './components/Login.js';
import Products from './components/Products.js'

function App() {

  return (
    <div className='App'>
      <BrowserRouter>

        <Nav />
        <Footer />

        <Routes>
          <Route element={<Private/>}>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path='Products' element={<Products/>} />
          <Route path="Update" element={<h1>Update Products page</h1>} />
          <Route path="About" element={<h1>about page</h1>} />
          <Route path="Profile" element={<h1>Profile page</h1>} />
          <Route path="Logout" element={<h1>logout page</h1>} />
          
          </Route>
          <Route path="Login" element={<Login/>}/>
          <Route path="SignUp" element={<SignUP />} />
        </Routes>



    </BrowserRouter>
    </div >
  )
}

export default App;


import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer.js';
import SignUP from './components/SignUp.js';
import './components/PrivateCom';
import Private from './components/PrivateCom';
import Login from './components/Login.js';
import Products from './components/Products.js'
import ProductList from './components/ProductList.js';
import Update from './components/Update.js';

function App() {

  return (
    <div className='App'>
      <BrowserRouter>

        <Nav />
        <Footer />

        <Routes>
          <Route element={<Private/>}>
          <Route path="/" element={<ProductList/>} />
          <Route path='AddProducts' element={<Products/>} />
          <Route path="ViewProducts" element={<h1>These are Your Products</h1>}/>
          <Route path="Update/:id" element={<Update/>} />
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


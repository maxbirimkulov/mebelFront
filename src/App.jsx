import {Route, Routes} from 'react-router-dom'
import Layout from "./components/Layout/Layout.jsx";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Catalog from "./pages/Catalog/Catalog.jsx";
import Product from "./pages/Product/Product.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import Room from "./pages/Room/Room.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import './styles/style.scss'
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import Favorites from "./pages/Favorites/Favorites.jsx";
import Checkout from "./pages/Checkout/Checkout.jsx";

function App() {

  return (
    <>
        <Routes>

            <Route path='/' element={<Layout/>}>
                <Route path='' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/catalog' element={<Catalog/>}/>
                <Route path='/product/:id' element={<Product/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/room' element={<Room/>}/>
                <Route path='/favorites' element={<Favorites/>}/>
                <Route path='/checkout' element={<Checkout/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Route>

            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>

        </Routes>
    </>
  )
}

export default App


import './App.css'
import Landing from './pages/Landing/Landing'
  import { Routes,Route,Router } from 'react-router-dom'
import ProductDetails from './pages/Productdetails/ProductDetails'
import Athu from './pages/Athu/Athu'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Profile from './pages/profile/Profile'
import Header from './components/Header'
import Cart from './components/cart/Cart'
import Ordercconfirm from './pages/Confirm/Ordercconfirm'
import Paymentpage from './pages/payment/Paymentpage'
import Orderlist from './pages/orderlist/Orderlist'
import Category from './pages/category/Category'
function App() {

  return (
    <>
    <Routes>
      

      <Route path='/' element={<Landing/>}/>
      <Route path='/details'  Component={ProductDetails}/>
      <Route path='/log' element={<Athu/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/confirm' element={<Ordercconfirm/>}/>
      <Route path='/pay' element={<Paymentpage/>}/>
      <Route path='/orderlist' element={<Orderlist/>}/>
      <Route path='/cat' element={<Category/>}/>
    </Routes>
    <ToastContainer/>
    
    
    
    </>
  )
}

export default App

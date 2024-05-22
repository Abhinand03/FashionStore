
import './App.css'
import Landing from './pages/Landing/Landing'
import { Routes,Route } from 'react-router-dom'
import ProductDetails from './pages/Productdetails/ProductDetails'
import Athu from './pages/Athu/Athu'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Profile from './pages/profile/Profile'
function App() {

  return (
    <>
    <Routes>

      <Route path='/' element={<Landing/>}/>
      <Route path='/details' element={<ProductDetails/>}/>
      <Route path='/log' element={<Athu/>}/>
      <Route path='/profile' element={<Profile/>}/>
    </Routes>
    <ToastContainer/>
    
    
    
    </>
  )
}

export default App

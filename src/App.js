import Authentication from './routes/authentication/Authentication'
import Home from './routes/home/Home'
import Navigation from './routes/navigation/Navigation'
import {Routes, Route} from 'react-router-dom'
import Shop from './routes/shop/Shop';
import Checkout from './routes/checkout/Checkout';


export default function App() {

  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='auth' element={<Authentication/>}/>
        <Route path='checkout' element={<Checkout/>}/>
      </Route>
    </Routes>      
  );
}

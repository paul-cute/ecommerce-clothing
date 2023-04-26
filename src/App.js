import Authentication from './routes/authentication/Authentication'
import Home from './routes/home/Home'
import Navigation from './routes/navigation/Navigation'
import {Routes, Route, Outlet} from 'react-router-dom'

const Shop = () => {
  return (
    <div>
      Shop
    </div>
  )
}


export default function App() {

  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='auth' element={<Authentication/>}/>
      </Route>
    </Routes>      
  );
}

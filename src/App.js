import Home from './routes/home/Home'
import Navigation from './routes/navigation/Navigation'
import {Routes, Route, Outlet} from 'react-router-dom'


export default function App() {

  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
      </Route>
    </Routes>      
  );
}

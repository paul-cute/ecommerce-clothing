import Home from './routes/home/Home'
import {Routes, Route, Outlet} from 'react-router-dom'


const Navigation = () => {
  return (
    <div>
      <div>
        <h1>Navigation Bar</h1>
      </div>
      <Outlet/>
    </div>
  )
}

export default function App() {

  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
      </Route>
    </Routes>      
  );
}

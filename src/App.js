import Authentication from './routes/authentication/Authentication'
import Home from './routes/home/Home'
import Navigation from './routes/navigation/Navigation'
import {Routes, Route} from 'react-router-dom'
import Shop from './routes/shop/Shop';
import Checkout from './routes/checkout/Checkout';
import { useEffect } from 'react';
import { createUserDocumentFromAuth, onAuthStateChangedListener } from './utils/firebase/firebase';
import {setCurrentUser} from '../src/store/user/userAction'
import {useDispatch} from 'react-redux'


export default function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
        if(user){
            createUserDocumentFromAuth(user)
        }
        dispatch(setCurrentUser(user));
    })

    return unsubscribe
}, [dispatch])

  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='shop/*' element={<Shop/>}/>
        <Route path='auth' element={<Authentication/>}/>
        <Route path='checkout' element={<Checkout/>}/>
      </Route>
    </Routes>      
  );
}

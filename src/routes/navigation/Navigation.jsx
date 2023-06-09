import {Outlet,Link} from 'react-router-dom'
import './navigation.scss'
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import { useContext } from 'react'
import { UserContext } from '../../contexts/userContext'
import { signOutUser } from '../../utils/firebase/firebase'
import CartIcon from '../../components/cartIcon/cartIcon'
import CartDropdown from '../../components/cartDropdown/cartDropdown'
import { CartContext } from '../../contexts/cartContext'



export default function Navigation(){
    const {currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);
  
    return (
      <>
        <div className='navigation'>
            <Link className='logo-container' to='/'>
                <CrwnLogo className='logo'/>
            </Link>
          <div className='nav-links-container'>
            <Link className='nav-link' to='/shop'>
                SHOP
            </Link>
            {
              currentUser ? (
                <span className='nav-link' onClick={signOutUser}>SIGN OUT</span>
              ) : (
                <Link className='nav-link' to='/auth'>
                  SIGN IN
                </Link>
              )
            }
            <CartIcon/>
          </div>
          {isCartOpen && <CartDropdown/>}
        </div>
        <Outlet/>
      </>
    )
  }
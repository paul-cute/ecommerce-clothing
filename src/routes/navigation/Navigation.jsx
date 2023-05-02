import {Outlet,Link} from 'react-router-dom'
import './navigation.scss'
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import { signOutUser } from '../../utils/firebase/firebase'
import CartIcon from '../../components/cartIcon/cartIcon'
import CartDropdown from '../../components/cartDropdown/cartDropdown'
import {useSelector} from 'react-redux'
import { selectCurrentUser } from '../../store/user/userSelector'
import { selectIsCartOpen } from '../../store/cart/cartSelector'


export default function Navigation(){

    const currentUser = useSelector(selectCurrentUser)

    const isCartOpen = useSelector(selectIsCartOpen)
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
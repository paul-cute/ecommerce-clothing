import { useSelector } from 'react-redux';
import Button from '../button/button';
import CartItem from '../cartItem/CartItem';
import './cartDropdown.scss'
import { useNavigate } from 'react-router-dom';
import { selectCartItems } from '../../store/cart/cartSelector';

const CartDropdown = () => {

    const cartItems = useSelector(selectCartItems);

    const navigate = useNavigate();

    const goToCheckOut = () => {
        navigate('/checkout')
    }

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map(item => <CartItem key={item.id} cartItem={item}/>)}
            </div>
            <Button onClick={goToCheckOut}>CHECKOUT</Button>
            
        </div>
    )
}

export default CartDropdown;
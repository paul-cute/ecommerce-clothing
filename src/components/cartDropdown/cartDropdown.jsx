import { useContext } from 'react';
import Button from '../button/button';
import CartItem from '../cartItem/CartItem';
import './cartDropdown.scss'
import { CartContext } from '../../contexts/cartContext';
import { useNavigate } from 'react-router-dom';

const CartDropdown = () => {

    const {cartItems} = useContext(CartContext);

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
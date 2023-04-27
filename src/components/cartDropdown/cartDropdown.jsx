import { useContext } from 'react';
import Button from '../button/button';
import CartItem from '../cartItem/CartItem';
import './cartDropdown.scss'
import { CartContext } from '../../contexts/cartContext';

const CartDropdown = () => {

    const {cartItems} = useContext(CartContext)

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map(item => <CartItem key={item.id} cartItem={item}/>)}
            </div>
            <Button>CHECKOUT</Button>
            
        </div>
    )
}

export default CartDropdown;
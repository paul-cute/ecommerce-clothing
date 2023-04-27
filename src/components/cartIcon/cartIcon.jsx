import './cartIcon.scss'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cartContext'

const CartIcon = () => {

    const {isCartOpen, setIsCartOpen, countCart} = useContext(CartContext)

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <div className='cart-icon-container' onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{countCart}</span>
            
        </div>
    )
}

export default CartIcon
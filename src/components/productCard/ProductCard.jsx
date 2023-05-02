import { addItemToCart } from '../../store/cart/cartAction';
import { selectCartItems } from '../../store/cart/cartSelector';
import Button from '../button/button';
import './productCard.scss'
import { useDispatch, useSelector } from 'react-redux';


const ProductCard = ({product}) => {

    const { name, price, imageUrl } = product;
    const cartItems = useSelector(selectCartItems)
    const dispatch = useDispatch();

  
    const addProductToCart = () => dispatch(addItemToCart(cartItems, product));
  
    return (
      <div className='product-card-container'>
        <img src={imageUrl} alt={`${name}`} />
        <div className='footer'>
          <span className='name'>{name}</span>
          <span className='price'>{price}</span>
        </div>
        <Button buttonType='inverted' onClick={addProductToCart}>
          Add to card
        </Button>
      </div>
    );
}

export default ProductCard;
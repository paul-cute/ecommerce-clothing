import { useParams } from 'react-router-dom';
import './category.scss'
import {  useEffect, useState } from 'react';
import ProductCard from '../../components/productCard/ProductCard';
import {useSelector} from 'react-redux'
import { selectCategoriesMap, selectIsCategoriesLoading } from '../../store/categories/categoriesSelector';
import Spinner from '../../components/spinner/Spinner';



const Category = () => {

    const { category } = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectIsCategoriesLoading);
    const [products, setProducts] = useState(categoriesMap[category]);
  
    useEffect(() => {
      setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);
    
    return (
        <>
            <h2 className='category-title'>{category.toUpperCase()}</h2>
            {
                isLoading ? <Spinner/> : 
                <div className='category-container'>
                    {
                    products && products.map((product) => <ProductCard key={product.id} product={product}/>)
                    }
                </div>
            }
        </>
    )
}

export default Category;
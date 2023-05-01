import { useParams } from 'react-router-dom';
import './category.scss'
import {  useEffect, useState } from 'react';
import ProductCard from '../../components/productCard/ProductCard';
import {useSelector} from 'react-redux'
import { selectCategoriesMap } from '../../store/categories/categoriesSelector';

const Category = () => {

    const {category} = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);

    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
      setProducts(categoriesMap[category])
    }, [category, categoriesMap])
    
    return (
        <>
            <h2 className='category-title'>{category.toUpperCase()}</h2>
            <div className='category-container'>
                {
                products && products.map((product) => <ProductCard key={product.id} product={product}/>)
                }
            </div>
        </>
    )
}

export default Category;
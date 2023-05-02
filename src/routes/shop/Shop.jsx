import { Routes, Route } from 'react-router-dom';
import './shop.scss'
import CategoryPreview from '../categories-preview/categoriesPreview';
import Category from '../category/category';
import { useEffect } from 'react';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase';
import { useDispatch } from 'react-redux'
import { setCategories } from '../../store/categories/categoriesAction';



function Shop() {

  const dispatch = useDispatch()

  useEffect(() => {

    const getCategoriesMap = async () => {
        const categoriesArray  = await getCategoriesAndDocuments();
        dispatch(setCategories(categoriesArray))  
    }
    getCategoriesMap()
}, [])

  return (
    <Routes>
    <Route index element={<CategoryPreview />} />
    <Route path=':category' element={<Category />} />
  </Routes>
  )
}

export default Shop
import { Routes, Route } from 'react-router-dom';
import './shop.scss'
import CategoryPreview from '../categories-preview/categoriesPreview';
import Category from '../category/category';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import {fetchCategoriesStartAsync} from '../../store/categories/categoriesAction'

function Shop() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategoriesStartAsync())  
  }, [])

  return (
    <Routes>
    <Route index element={<CategoryPreview />} />
    <Route path=':category' element={<Category />} />
  </Routes>
  )
}

export default Shop
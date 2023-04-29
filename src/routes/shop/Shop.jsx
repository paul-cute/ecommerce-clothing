import { Routes, Route } from 'react-router-dom';
import './shop.scss'
import CategoryPreview from '../categories-preview/categoriesPreview';
import Category from '../category/category';



function Shop() {
  return (
    <Routes>
    <Route index element={<CategoryPreview />} />
    <Route path=':category' element={<Category />} />
  </Routes>
  )
}

export default Shop
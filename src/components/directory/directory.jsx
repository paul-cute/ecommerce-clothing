import CategoryItem from "../categoryItem/categoryItem";
import './directory.scss'

const Directory = ({categories}) => {
    return (
        <div className='directory-container'>
          {categories.map((category) => (
            <CategoryItem key={category.id} category={category} />
          ))}
        </div>
      );
}

export default Directory;
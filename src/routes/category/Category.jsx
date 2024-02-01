import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';

import { CategoriesContext } from '../../contexts/CategoriesContext';
import ProductCard from '../../components/products/ProductCard';

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <div className="category-container grid grid-cols-4 gap-8">
      {products &&
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
};

export default Category;

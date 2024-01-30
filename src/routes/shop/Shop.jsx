import { useContext } from 'react';
import { ProductsContext } from '../../contexts/ProductsContext';
import ProductCard from '../../components/products/ProductCard';

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;

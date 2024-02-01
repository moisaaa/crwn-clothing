import ProductCard from '../products/ProductCard';

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="m-4">
      <h2 className="mb-2">
        <span className="text-3xl">{title.toUpperCase()}</span>
      </h2>
      <div className="grid grid-cols-4 gap-8">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;

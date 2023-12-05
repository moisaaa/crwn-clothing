const Category = ({ category }) => {
  const { id, title, imageUrl } = category;
  return (
    <div
      key={id}
      className="category border-4 border-gray-700 flex items-center justify-center p-24 w-1/4 hover:scale-105 transition"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="category-body border-2 border-gray-700 p-4 flex flex-col justify-center items-center bg-white bg-opacity-75">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default Category;

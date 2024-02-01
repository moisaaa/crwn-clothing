import { useNavigate } from 'react-router-dom';

const Category = ({ category }) => {
  const nav = useNavigate();
  const { id, title, imageUrl, route } = category;

  const onNavigateHandler = () => nav(route);

  return (
    <div
      key={id}
      onClick={onNavigateHandler}
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

import Home from './routes/home/Home';
import Navigation from './routes/navigation/Navigation';
import { Routes, Route } from 'react-router-dom';
import SignIn from './routes/sign-in/SignIn';
import Shop from './routes/shop/Shop';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path="shop" element={<Shop />}></Route>
        <Route path="sign-in" element={<SignIn />}></Route>
      </Route>
    </Routes>
  );
};

export default App;

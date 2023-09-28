import './App.css';
import Header from './components/Header/Header.jsx';
import ProductList from './components/ProductList/ProductsList.jsx';
import Cart1 from './components/Cart/Cart1.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FinalCart from './components/FinalCart/FinalCart.jsx';
// import FinalCart from './components/finalCart/FinalCart.jsx';

function App() {
  return (
  <Router>
    <Header />
    <Routes>
        {/* <Route path='/' element={<Header />} /> */}
        <Route path='/' element={<ProductList />} />
        <Route path='/cart1' element={<Cart1 />} />
        <Route path='/FinalCart' element={<FinalCart />} />
    </Routes>
  </Router>    
  );
}

export default App;

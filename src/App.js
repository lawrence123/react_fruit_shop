
import ProductList from './ProductList';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import CheckOut from './CheckOut';
import ProductDetail from './ProductDetail';
import {Cartcontext} from "./CartContext";
import {useState} from "react"
function App() {
  const [cartItems,setCartItems] = useState([])
  return (
   <BrowserRouter>
    <Cartcontext.Provider value={{cartItems,setCartItems}}>
        <Link to="/">home</Link>
        <span> </span>
        <Link to="/checkout">shop cart</Link>
        <Routes>
          <Route path="/" element={<ProductList/>}/>
          <Route path="/checkout" element={<CheckOut/>}/>
          
          <Route path="/product" element={<ProductDetail/>}>
            <Route path=":id"  element={<ProductDetail/>}/>
          </Route>
          
          <Route path="*" element={<p>can't find file 404</p>}/>
        </Routes>
    </Cartcontext.Provider>

  
   </BrowserRouter>
  );
}

export default App;

import './styles/App.css';
import Navbar from './Navbar';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Route,Routes } from 'react-router-dom';
import ProductPage from './ProductPage';
import ProductDetails from './ProductDetails';
import PageNotFound from './PageNotFound';
import CheckoutPage from './CheckoutPage';
import{ useState} from 'react';

function App() {
  const savedData=JSON.parse(localStorage.getItem("cartData")||"{}");
    
  const [basket,updateBasket]=useState(savedData)
  function handleAddToCart(count,prdouctId){
    let oldCount=basket[prdouctId]||0;
    const newCart={...basket,[prdouctId]:oldCount+count};
    updateBasket(newCart);
    const cartString=JSON.stringify(newCart);
    localStorage.setItem("cartData",cartString);
  }
  const totalCount=Object.keys(basket).reduce((reduced,current)=>reduced+basket[current],0);
  return (
    <div className="App">
      <Navbar basketCount={totalCount}/>
      <Routes>
        <Route path='/' element={<ProductPage/>}>
        </Route>
        <Route path='/detail/:id' element={<ProductDetails onAddToCart={handleAddToCart}/>}>
        </Route>
        <Route path='/checkout' element={<CheckoutPage/>}>
        </Route>
        <Route path='*' element={<PageNotFound />}>
        </Route>
      </Routes>

    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Banner from './Banner';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Contact from './Contact';
import Products from './Products';
import Blog from './Blog';
import About from './About';
import Product_view from './Product_view';
import ProdCategory from './ProdCategory';


function App() {
  return (
    <div >
<BrowserRouter>
<Routes>

<Route path='/' element={<Banner/>}/>
<Route path='/About' element={<About/>}/>
<Route path='/Contact' element={<Contact/>}/>
<Route path='/Products' element={<Products/>}/>
<Route path='/Blog' element={<Blog/>}/>
<Route path='/prodCategory' element={<ProdCategory/>}/>
<Route path='/prodView' element={<Product_view/>}/>



</Routes>

</BrowserRouter>

      


    </div>
  );
}

export default App;

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
import HEALTH_FOOD from './HEALTH_FOOD';
import HEALTH_SUPPLEMENT from './HEALTH_SUPPLEMENT';
import AYURVEDA from './AYURVEDA';
import WATER_PURIFIRE from './WATER_PURIFIRE';
import AIR_PURIFIER from './AIR_PURIFIER';
import WOMEN_HYGEIN from './WOMEN_HYGEIN';
import ORAL_CARE from './ORAL_CARE';
import PERSONAL_CARE from './PERSONAL_CARE';
import AGRI_PRODUCTS from './AGRI_PRODUCTS';
import MACH_DRIVE from './MACH_DRIVE';



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

<Route path='/healthSupplement' element={<HEALTH_SUPPLEMENT/>}/>
<Route path='/ayurveda' element={<AYURVEDA/>}/>
<Route path='/waterPurifire' element={<WATER_PURIFIRE/>}/>
<Route path='/airPurifire' element={<AIR_PURIFIER/>}/>
<Route path='/healthFood' element={<HEALTH_FOOD/>}/>
<Route path='/womenHygein' element={<WOMEN_HYGEIN/>}/>
<Route path='/oralCare' element={<ORAL_CARE/>}/>
<Route path='/personalCare' element={<PERSONAL_CARE/>}/>
<Route path='/agriProducts' element={<AGRI_PRODUCTS/>}/>
<Route path='/machDrive' element={<MACH_DRIVE/>}/>




</Routes>

</BrowserRouter>

      


    </div>
  );
}

export default App;

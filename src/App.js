import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MyHero from './components/MyHero';
import MyNav from './components/MyNav';
import Products from './components/Products';
import AboutUs from './components/AboutUs';
import OurRange from './components/OurRange';
import ExpressDelivery from './components/ExpressDelivery';
import Areas from './components/Areas';
import LowPrices from './components/LowPrices';
import Orders from './components/Orders';
import Cannabis from './components/Cannabis';

function App() {
  return (
    <>
      <div className='hero_section_bgimg bg-no-repeat bg-cover min-[1200px]:min-h-[100vh] lg:flex lg:flex-col'>
        <MyNav />
        <MyHero />
      </div>
      <Products />
      <AboutUs />
      <OurRange />
      <ExpressDelivery />
      <Areas />
      <LowPrices />
      <Orders />
      {/* <Cannabis /> */}
    </>
  );
}

export default App;

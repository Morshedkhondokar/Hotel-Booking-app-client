import { Outlet } from 'react-router'
import Navbar from './layout/Navbar'
import 'animate.css';
import { Toaster } from 'react-hot-toast';
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from 'gsap';
import Footer from './layout/Footer';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar/>
      <Outlet/>
      
      <Toaster/>
      <Footer/>
    </div>
  )
}

export default App

import { Outlet } from 'react-router'
import Navbar from './layout/Navbar'
import 'animate.css';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar/>
      <Outlet/>
      <div className='w-screen h-screen bg-[#3d3d3d]'>
      <Toaster/>

      </div>
      {/* Footer */}
    </div>
  )
}

export default App

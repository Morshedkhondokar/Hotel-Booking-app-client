import { Outlet } from 'react-router'
import Navbar from './layout/Navbar'
import 'animate.css';

const App = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar/>
      <Outlet/>
      <div className='w-screen h-screen bg-[#3d3d3d]'>

      </div>
      {/* Footer */}
    </div>
  )
}

export default App

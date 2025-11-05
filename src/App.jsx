import { Outlet } from 'react-router'
import Navbar from './layout/Navbar'

const App = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar/>
      <Outlet/>
      <div className='w-screen h-screen bg-red-600'>

      </div>
      {/* Footer */}
    </div>
  )
}

export default App

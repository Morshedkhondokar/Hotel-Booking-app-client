import React from 'react'

const Home = () => {
  return (
    <div className="relative h-screen bg-[url('/images/hero4.jpg')] bg-cover bg-left">
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/30"></div>
  
  {/* Hero text */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
    <h1 className="text-5xl font-bold">Welcome to StayDream House</h1>
    <p className="mt-4 text-xl">Luxury Beach Resort Experience</p>
  </div>
</div>

  )
}

export default Home

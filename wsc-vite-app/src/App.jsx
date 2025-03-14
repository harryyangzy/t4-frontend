import React from 'react'
import './App.css'

function App() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 text-white bg-black">
        <div className="px-20 py-12 flex items-center justify-between">
          <a href="/" className="text-lg font-bold">Western Sales Club</a>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="/about">About Us</a></li>
              <li><a href="/executive-team">Executive Team</a></li>
              <li><a href="/events">Events</a></li>
              <li><a href="/contact-us">Contact Us</a></li>
              <li><a href="/sponsors">Sponsors</a></li>
            </ul>
          </nav>
        </div>

        <div className="flex flex-col items-center justify-center h-96">
          <h3 className="text-2xl">Welcome to</h3>
          <h1 className="text-5xl font-bold">Western's Sales Community</h1>
        </div>
      </header>

      {/* MAIN
          flex-grow pushes the footer down. 
          pt-[384px] (24rem) offsets the fixed header’s total height 
          (12rem from the nav + 24rem hero = 36rem, adjust as needed).
      */}
      <main className="flex-grow pt-[384px] px-4">
        
      </main>

      {/* FOOTER */}
      <footer className="bg-black text-white py-12 text-center">
        <p>&copy; {new Date().getFullYear()} Western Sales Club. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App

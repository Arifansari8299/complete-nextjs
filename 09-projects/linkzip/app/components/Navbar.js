import Link from 'next/link'
import React from 'react'
const Navbar = () => {
  return (
    <nav className="h-16 bg-purple-700 flex justify-between items-center text-white p-4">
        <div className="logo text-2xl font-bold">
         Linkzip
        </div>
        <ul className='flex space-x-4 justify-center items-center font-semibold'>
         <Link href="/"><li>Home</li></Link>
         <Link href="/about"><li>About</li></Link>
         <Link href="/generate"><li>Shorten</li></Link>
         <Link href="/contact"><li>Contact us </li></Link>
         <li className="flex space-x-2 justify-center items-center">
            <Link href="/generate"><button className='px-3 py-2 bg-purple-500 rounded-lg shadow-lg cursor-pointer font-bold '>Try Now</button></Link>
            <Link href="/github"><button className='px-3 py-2 bg-purple-500 rounded-lg shadow-lg cursor-pointer font-bold '>GitHub</button></Link>
         </li>
        </ul>
    </nav>
  )
}

export default Navbar
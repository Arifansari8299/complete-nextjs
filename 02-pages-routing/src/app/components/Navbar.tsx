import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='w-full h-16 bg-gray-400 flex justify-between items-center '>
        <div className="logo">Logo</div>
        <ul className='flex'>
            <Link href="/home">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
        </ul>  
    </nav>
  )
}

export default Navbar
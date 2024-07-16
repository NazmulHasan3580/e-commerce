import Link from 'next/link'
import React from 'react'
import Menu from './Menu'

const Header = () => {
  return (
   <header>
    <nav>
      <div className='navbar justify-between bg-base-300'>
        <Link href='/' className='btn btn-ghost text-lg'>
          E-commers App
        </Link>
        <ul className='flex'>
            <li>
              <Link href="/cart" className='btn btn-ghost rounded-btn'>Cart</Link>
            </li>
            <Menu/>
        </ul>
      </div>
    </nav>
   </header>
  )
}

export default Header

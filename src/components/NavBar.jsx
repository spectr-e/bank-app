import { useState } from 'react'
import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'

const NavBar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className='flex items-center justify-between w-full py-6 navbar'>
      {/* the logo goes here */}
      <img src={logo} alt='hoobank logo' className='w-[124px] h-[32px]' />

      {/* desktop version of the nav links */}
      <ul className='items-center justify-end flex-1 hidden list-none sm:flex'>
        {navLinks.map((link, index) => (
          <li
            key={index}
            className={`font-normal cursor-pointer text-white text-[16px] font-poppins  ${
              index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
            }`}
          >
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>

      {/* mobile version of the nav links */}
      <div className='flex items-center justify-end flex-1 sm:hidden'>
        {/* click this icon to expand the menu */}
        <img
          src={toggle ? close : menu}
          alt='open|close menu'
          className='w-[28px] h-[28px] object-contain'
          onClick={() => setToggle(!toggle)}
        />
      </div>
    </nav>
  )
}

export default NavBar

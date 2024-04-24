import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'

const NavBar = () => {
  return (
    <nav className='flex items-center justify-between w-full py-6 navbar'>
      <img src={logo} alt='hoobank logo' className='w-[124px] h-[32px]' />
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
    </nav>
  )
}

export default NavBar

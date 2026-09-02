import { useState } from 'react'
import navLogo from '../assets/logo (2).png'
import type { NavLinkProps } from '../types/NavLinksProps'
import NavBtn from './NavBtn'
import NavGreenBtn from './NavGreenBtn'
import MobileNavbar from './MobileNavbar'
import Login from '../components/Login'

const NavBar = () => {
  const [open, setOpen] = useState(false)
  const [loginDialog, setLoginDialog] = useState(false)
  const navLinks: NavLinkProps[] = [
    { id: 1, label: 'Home', href: '/' },
    { id: 2, label: 'About', href: '/about' },
    { id: 3, label: 'Skills', href: '/skills' },
    { id: 4, label: 'Projects', href: '/projects' },
    { id: 5, label: 'Contact', href: '/contact' },
  ]
  return (
    <div className='bg-[#f1e8e8c4] shadow sticky top-0 z-50 py-2'>
      <div className='max-w-7xl mx-auto '>
        {/* Desktop Navbar */}
        <div className=' hidden md:flex justify-between items-center'>
          <img src={navLogo} alt='' className='w-38' />
          {/* <h1 className='text-3xl font-semibold text-green-600'>Logo</h1> */}
          <nav className='flex items-center justify-between gap-5 text-base font-medium '>
            {navLinks.map((item) => (
              <a
                className='hover:text-green-700 duration-300 transform'
                href={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className='flex justify-between items-center gap-4'>
            <NavBtn onClick={() => setLoginDialog(true)}>login</NavBtn>
            <NavGreenBtn>Register</NavGreenBtn>
          </div>
        </div>
        {/* Mobile */}
        <div>
          <div className='flex md:hidden justify-between items-center px-2 '>
            <img src={navLogo} alt='' className='w-38' />
            {/* <h1>Logo</h1> */}
            <div>
              <button onClick={() => setOpen(!open)}>
                {open ? '✕' : '☰'}
              </button>
            </div>
          </div>
          {open && (
            <MobileNavbar
              navLinks={navLinks}
              setOpen={setOpen}
              setLoginDialog={setLoginDialog}
            />
          )}
        </div>
        {loginDialog && <Login setOpen={setLoginDialog} />}
      </div>
    </div>
  )
}

export default NavBar

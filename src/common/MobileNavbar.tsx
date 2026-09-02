import type { NavLinkProps } from '../types/NavLinksProps'
import NavBtn from './NavBtn'
import NavGreenBtn from './NavGreenBtn'

interface MobileProps {
  navLinks: NavLinkProps[]
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  setLoginDialog: React.Dispatch<React.SetStateAction<boolean>>
}

const MobileNavbar = ({ navLinks, setOpen, setLoginDialog }: MobileProps) => {
  return (
    <div className='space-y-4'>
      <nav
        className={`flex flex-col gap-3 items-center transition-all duration-300`}
      >
        {navLinks.map((item) => (
          <a
            className='font-medium hover:text-green-700 duration-300'
            key={item.id}
            href={item.href}
            onClick={() => {
              setOpen(false)
            }}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className='flex flex-col items-center justify-center gap-5'>
        <NavBtn onClick={() => setLoginDialog(true)}>login</NavBtn>
        <NavGreenBtn>Register</NavGreenBtn>
      </div>
    </div>
  )
}

export default MobileNavbar

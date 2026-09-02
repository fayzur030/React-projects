import type React from 'react'
interface props {
  children: React.ReactNode
  onClick?: () => void
}

const NavBtn = ({ children, onClick }: props) => {
  return (
    <button
      className={`border border-gray-400 bg-transparent px-4 py-0.5 rounded-md cursor-pointer text-base font-normal hover:bg-gray-300 transform duration-300`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default NavBtn

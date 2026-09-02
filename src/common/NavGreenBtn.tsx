const NavGreenBtn = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className='border border-gray-400 bg-green-500 text-white px-4 py-0.5 rounded-md cursor-pointer text-base font-normal hover:bg-green-700 transform duration-300'>
      {children}
    </button>
  )
}

export default NavGreenBtn

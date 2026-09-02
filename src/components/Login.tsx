import type React from 'react'

interface ButtonProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Login = ({ setOpen }: ButtonProps) => {
  return (
    <div className='fixed inset-0 z-100 flex items-center justify-center bg-black/50 backdrop-blur-sm'>
      <div className='bg-white shadow-xl w-full max-w-md rounded-md p-6'>
        {/* Header */}
        <div className='flex justify-between items-center mb-6'>
          <h1 className='text-2xl font-semibold'>Login</h1>

          <button
            className='bg-gray-200 w-7 h-7 hover:bg-gray-300 rounded-md cursor-pointer'
            onClick={() => setOpen(false)}
          >
            X
          </button>
        </div>

        {/* Form */}
        <form className='space-y-4'>
          {/* Email */}
          <div>
            <label className='block mb-1 font-medium'>Email</label>

            <input
              type='email'
              placeholder='Enter your email'
              className='w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-blue-500'
            />
          </div>

          {/* Password */}
          <div>
            <label className='block mb-1 font-medium'>Password</label>

            <input
              type='password'
              placeholder='Enter your password'
              className='w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-blue-500'
            />
          </div>

          {/* Login Button */}
          <button
            type='submit'
            className='w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 cursor-pointer'
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login

import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
  const handelIncrese = () => {
    setCount(count + 1)
  }
  const handelDecrese = () => {
    setCount(count - 1)
  }
  const handelReset = () => {
    setCount(0)
  }
  return (
    <div className='max-w-md mx-auto mt-20 text-center'>
      <div className='bg-white border border-gray-200 rounded-2xl shadow-lg p-8'>
        {/* Title */}
        <h1 className='text-3xl font-bold text-indigo-600 mb-6'>Counter App</h1>

        {/* Count */}
        <div className='mb-8'>
          <p className='text-gray-500 text-lg mb-2'>Current Count: {count}</p>

          <p className='text-6xl font-bold text-gray-800'>{}</p>
        </div>

        {/* Buttons */}
        <div className='flex justify-center gap-3'>
          <button
            className={`px-5 py-2.5 bg-gray-800 text-white rounded-lg
        font-medium hover:bg-gray-900 active:scale-95
        transition-all duration-200 cursor-pointer ${count === 0 ? 'bg-green-500' : ''}`}
            onClick={handelDecrese}
          >
            Decrease -
          </button>
          <button
            className='px-5 py-2.5 bg-red-500 text-white rounded-lg
        font-medium hover:bg-red-600 active:scale-95
        transition-all duration-200 cursor-pointer'
            onClick={handelReset}
          >
            Reset
          </button>
          <button
            className='px-5 py-2.5 bg-indigo-600 text-white rounded-lg
        font-medium hover:bg-indigo-700 active:scale-95
        transition-all duration-200 cursor-pointer'
            onClick={handelIncrese}
          >
            Increase +
          </button>
        </div>
      </div>
    </div>
  )
}

export default Counter

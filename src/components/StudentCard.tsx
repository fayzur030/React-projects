import type { StudentProps } from '../types/StudentsProps'

const StudentCard = ({ student }: { student: StudentProps }) => {
  // const handelClick = (id: number) => {
  //   console.log(id)
  // }
  return (
    <div className='rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg'>
      {/* Header */}
      <div className='mb-5 flex items-center justify-between'>
        <div>
          <h1 className='text-xl font-bold text-gray-800'>{student.name}</h1>
          <p className='mt-1 text-sm text-gray-500'>{student.department}</p>
        </div>

        {/* Status */}
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            student.isActive
              ? 'bg-green-100 text-green-700'
              : 'bg-red-100 text-red-700'
          }`}
        >
          {student.isActive ? 'Active' : 'Inactive'}
        </span>
      </div>

      {/* Student Information */}
      <div className='space-y-2 border-t border-gray-100 pt-4'>
        <div className='flex justify-between items-center'>
          <span className='text-sm text-gray-500'>Email</span>
          <span className='text-sm font-medium text-gray-700'>
            {student.email}
          </span>
        </div>

        <div className='flex justify-between items-center'>
          <span className='text-sm text-gray-500'>Age</span>
          <span className='text-sm font-medium text-gray-700'>
            {student.age}
          </span>
        </div>

        <div className='flex justify-between items-center'>
          <span className='text-sm text-gray-500'>Semester</span>
          <span className='text-sm font-medium text-gray-700'>
            {student.semester}
          </span>
        </div>

        <div className='flex justify-between items-center'>
          <span className='text-sm text-gray-500'>CGPA</span>
          <span className='text-sm font-bold text-blue-600'>
            {student.cgpa}
          </span>
        </div>
        {/* <button
          className='border px-3 py-0.5 border-gray-200 bg-transparent cursor-pointer'
          onClick={() => handelClick(student.id)}
        >
          Hey I am hear
        </button> */}
      </div>
    </div>
  )
}

export default StudentCard

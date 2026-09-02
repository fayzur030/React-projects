import type { StudentProps } from '../types/StudentsProps'
import StudentCard from './StudentCard'

const students: StudentProps[] = [
  {
    id: 1,
    name: 'Rahim Ahmed',
    age: 21,
    email: 'rahim@example.com',
    department: 'Computer Science',
    semester: 4,
    cgpa: 3.75,
    isActive: true,
  },
  {
    id: 2,
    name: 'Nusrat Jahan',
    age: 22,
    email: 'nusrat@example.com',
    department: 'Electrical Engineering',
    semester: 6,
    cgpa: 3.92,
    isActive: true,
  },
  {
    id: 3,
    name: 'Fahim Hasan',
    age: 20,
    email: 'fahim@example.com',
    department: 'Business Administration',
    semester: 3,
    cgpa: 3.45,
    isActive: true,
  },
  {
    id: 4,
    name: 'Sadia Islam',
    age: 23,
    email: 'sadia@example.com',
    department: 'Computer Science',
    semester: 8,
    cgpa: 3.88,
    isActive: false,
  },
  {
    id: 5,
    name: 'Tanvir Hossain',
    age: 21,
    email: 'tanvir@example.com',
    department: 'Mathematics',
    semester: 5,
    cgpa: 3.25,
    isActive: true,
  },
  {
    id: 6,
    name: 'Mim Akter',
    age: 20,
    email: 'mim@example.com',
    department: 'Physics',
    semester: 4,
    cgpa: 3.67,
    isActive: true,
  },
  {
    id: 7,
    name: 'Sakib Khan',
    age: 24,
    email: 'sakib@example.com',
    department: 'Civil Engineering',
    semester: 8,
    cgpa: 3.15,
    isActive: false,
  },
  {
    id: 8,
    name: 'Jannatul Ferdous',
    age: 22,
    email: 'jannatul@example.com',
    department: 'Computer Science',
    semester: 6,
    cgpa: 3.95,
    isActive: true,
  },
  {
    id: 9,
    name: 'Arif Mahmud',
    age: 21,
    email: 'arif@example.com',
    department: 'Mechanical Engineering',
    semester: 5,
    cgpa: 3.52,
    isActive: true,
  },
  {
    id: 10,
    name: 'Sumaiya Rahman',
    age: 23,
    email: 'sumaiya@example.com',
    department: 'English',
    semester: 7,
    cgpa: 3.81,
    isActive: true,
  },
]

const Student = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-7xl mx-auto mt-4 px-2 mb-12'>
      {students.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
    </div>
  )
}

export default Student

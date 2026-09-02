import { use } from 'react'

const User = ({ userDataPromise }) => {
  const users = use(userDataPromise)
  console.log(users)

  return (
    <div className='text-5xl font-semibold text-center text-red-600 mt-5'>
      user:
      {users.map((user) => (
        <div>
          <p className='text-base'>{user.name}</p>
        </div>
      ))}
    </div>
  )
}

export default User

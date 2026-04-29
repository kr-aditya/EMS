import React from 'react'

const Header = (props) => {


  const logOutUser = () => {
    localStorage.removeItem('loggedInUser')
    props.changeUser('')
  }

  const name = props?.data?.firstName || (props?.role === 'admin' ? 'Admin' : 'User')
  const roleLabel = props?.role === 'admin' ? 'Administrator' : 'Employee'

  return (
    <div className='flex items-end justify-between'>
      <div>
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>{name} 👋</span></h1>
        <p className='text-sm text-gray-400 mt-1'>{roleLabel} dashboard</p>
      </div>
        <button onClick={logOutUser} className='bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm'>Log Out</button>
    </div>
  )
}

export default Header
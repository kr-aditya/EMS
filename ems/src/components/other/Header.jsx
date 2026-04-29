import React from 'react'

const Header = (props) => {


  const logOutUser = () => {
    localStorage.removeItem('loggedInUser')
    props.changeUser('')
  }

  const name = props?.data?.firstName || (props?.role === 'admin' ? 'Admin' : 'User')
  const roleLabel = props?.role === 'admin' ? 'Administrator' : 'Employee'

  return (
    <div className='ems-panel px-6 py-4 flex items-center justify-between'>
      <div>
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>{name} 👋</span></h1>
        <p className='text-sm ems-subtle mt-1'>{roleLabel} dashboard</p>
      </div>
        <button onClick={logOutUser} className='bg-red-600 text-base font-medium text-white px-5 py-2 rounded-full shadow-lg shadow-red-500/20'>Log Out</button>
    </div>
  )
}

export default Header
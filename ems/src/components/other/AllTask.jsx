import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

  const [userData] =  useContext(AuthContext)

   
  return (
    <div className='ems-panel p-6 mt-6'>
      <div className='bg-[#111b26] mb-2 py-2 px-4 flex justify-between rounded-lg text-sm uppercase tracking-widest text-slate-300'>
            <h2 className='w-1/5'>Employee</h2>
            <h3 className='w-1/5'>New</h3>
            <h5 className='w-1/5'>Active</h5>
            <h5 className='w-1/5'>Completed</h5>
            <h5 className='w-1/5'>Failed</h5>
        </div>
        <div className=''>
        {userData?.length ? userData.map(function(elem,idx){
            return <div key={idx} className='border border-white/10 mb-2 py-3 px-4 flex justify-between rounded-lg bg-[#0b1220]'>
            <h2 className='text-base font-medium w-1/5'>{elem.firstName}</h2>
            <h3 className='text-base font-semibold w-1/5 text-sky-300'>{elem.taskCounts.newTask}</h3>
            <h5 className='text-base font-semibold w-1/5 text-amber-300'>{elem.taskCounts.active}</h5>
            <h5 className='text-base font-semibold w-1/5 text-emerald-200'>{elem.taskCounts.completed}</h5>
            <h5 className='text-base font-semibold w-1/5 text-rose-300'>{elem.taskCounts.failed}</h5>
        </div>
        }) : (
          <div className='text-gray-400 text-sm'>No employee data available yet.</div>
        )}
        </div>
        
        
    </div>
  )
}

export default AllTask
import React from 'react'

const TaskListNumbers = ({data}) => {
    if (!data) return null
  return (
    <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5'>
        <div className='ems-panel px-6 py-6 border border-sky-500/20 bg-gradient-to-br from-[#0f2434] to-[#0b1624]'>
            <h2 className='text-3xl font-semibold text-sky-200'>{data.taskCounts.newTask}</h2>
            <h3 className='text-base mt-1 font-medium text-sky-100/80'>New tasks</h3>
        </div>
        <div className='ems-panel px-6 py-6 border border-emerald-500/20 bg-gradient-to-br from-[#0f2c27] to-[#0b1715]'>
            <h2 className='text-3xl font-semibold text-emerald-200'>{data.taskCounts.completed}</h2>
            <h3 className='text-base mt-1 font-medium text-emerald-100/80'>Completed</h3>
        </div>
        <div className='ems-panel px-6 py-6 border border-amber-400/30 bg-gradient-to-br from-[#2b2415] to-[#1a1408]'>
            <h2 className='text-3xl font-semibold text-amber-200'>{data.taskCounts.active}</h2>
            <h3 className='text-base mt-1 font-medium text-amber-100/80'>In progress</h3>
        </div>
        <div className='ems-panel px-6 py-6 border border-rose-500/20 bg-gradient-to-br from-[#2a1418] to-[#160a0c]'>
            <h2 className='text-3xl font-semibold text-rose-200'>{data.taskCounts.failed}</h2>
            <h3 className='text-base mt-1 font-medium text-rose-100/80'>Blocked</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers
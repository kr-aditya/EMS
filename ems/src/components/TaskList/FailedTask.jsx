import React from 'react'

const FailedTask = ({ data, onReopen }) => {
  return (
    <div className='task-card flex-shrink-0 w-[300px] p-5 rounded-2xl border border-rose-500/30 bg-gradient-to-br from-[#2a1418] to-[#160a0c] shadow-lg shadow-rose-500/10 fade-rise'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-rose-500/20 text-rose-100 text-xs uppercase tracking-widest px-3 py-1 rounded-full'>{data.category}</h3>
                <h4 className='text-xs text-slate-300'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-4 text-xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-1 task-card__desc'>
                {data.taskDescription}
            </p>
            <div className='task-card__footer'>
                <button className='bg-rose-500/90 text-slate-900 rounded-full font-semibold py-2 px-4 text-xs'>Failed</button>
                <button onClick={onReopen} className='bg-slate-800 text-slate-200 rounded-full font-semibold py-2 px-4 text-xs'>Reopen</button>
            </div>
        </div>
  )
}

export default FailedTask
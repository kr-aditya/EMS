import React from 'react'

const AcceptTask = ({data, onComplete, onFail}) => {
  return (
    <div className='task-card flex-shrink-0 w-[300px] p-5 rounded-2xl border border-amber-400/30 bg-gradient-to-br from-[#2b2415] to-[#1a1408] shadow-lg shadow-amber-500/10 fade-rise'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-amber-400/20 text-amber-100 text-xs uppercase tracking-widest px-3 py-1 rounded-full'>{data.category}</h3>
                <h4 className='text-xs text-slate-300'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-4 text-xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-1 task-card__desc'>
                {data.taskDescription}
            </p>
            <div className='task-card__footer'>
                <button onClick={onComplete} className='bg-emerald-500/90 hover:bg-emerald-400 text-slate-900 rounded-full font-semibold py-2 px-4 text-xs'>Complete</button>
                <button onClick={onFail} className='bg-rose-500/90 hover:bg-rose-400 text-slate-900 rounded-full font-semibold py-2 px-4 text-xs'>Fail</button>
            </div>
        </div>
  )
}

export default AcceptTask
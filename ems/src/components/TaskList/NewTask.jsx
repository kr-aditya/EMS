import React from 'react'

const NewTask = ({data, onAccept}) => {
    return (
        <div className='task-card flex-shrink-0 w-[300px] p-5 rounded-2xl border border-sky-500/25 bg-gradient-to-br from-[#0f2434] to-[#0a1724] shadow-lg shadow-sky-500/10 fade-rise'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-sky-500/20 text-sky-200 text-xs uppercase tracking-widest px-3 py-1 rounded-full'>{data.category}</h3>
                <h4 className='text-xs text-slate-300'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-4 text-xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-1 task-card__desc'>
                {data.taskDescription}
            </p>
            <div className='task-card__footer'>
                <button onClick={onAccept} className='bg-sky-500/90 hover:bg-sky-400 text-slate-900 rounded-full font-semibold py-2 px-4 text-xs'>Accept Task</button>
            </div>
        </div>
    )
}

export default NewTask
import React, { useContext, useMemo, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

    const [userData, setUserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [assignTo, setAssignTo] = useState('')
    const [category, setCategory] = useState('')

    const employeeOptions = useMemo(() => {
        if (!userData) return []
        return userData.map((employee) => employee.firstName)
    }, [userData])

    const submitHandler = (e) => {
        e.preventDefault()

        const taskPayload = {
            taskTitle,
            taskDescription,
            taskDate,
            category,
            active: false,
            newTask: true,
            failed: false,
            completed: false
        }

        setUserData((prev) => {
            if (!prev) return prev
            return prev.map((employee) => {
                if (employee.firstName !== assignTo) {
                    return employee
                }

                return {
                    ...employee,
                    tasks: [...employee.tasks, taskPayload],
                    taskCounts: {
                        ...employee.taskCounts,
                        newTask: employee.taskCounts.newTask + 1
                    }
                }
            })
        })

        setTaskTitle('')
        setCategory('')
        setAssignTo('')
        setTaskDate('')
        setTaskDescription('')

    }

    return (
        <div className='ems-panel p-6 mt-6'>
            <form onSubmit={(e) => {
                submitHandler(e)
            }}
                className='flex flex-wrap w-full items-start justify-between gap-6'
            >
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                        <input
                            value={taskTitle}
                            onChange={(e) => {
                                setTaskTitle(e.target.value)
                            }}
                            className='text-sm py-2 px-3 w-4/5 rounded-lg outline-none bg-[#0b1220] border border-white/10 mb-4 focus:border-emerald-400/60' type="text" placeholder='Make a UI design'
                            required
                        />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                        <input
                            value={taskDate}
                            onChange={(e) => {
                                setTaskDate(e.target.value)
                            }}
                            className='text-sm py-2 px-3 w-4/5 rounded-lg outline-none bg-[#0b1220] border border-white/10 mb-4 focus:border-emerald-400/60' type="date" required />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
                        <select
                            value={assignTo}
                            onChange={(e) => {
                                setAssignTo(e.target.value)
                            }}
                            className='text-sm py-2 px-3 w-4/5 rounded-lg outline-none bg-[#0b1220] text-white font-medium border border-white/10 mb-4 focus:border-emerald-400/60'
                            required
                        >
                            <option value=''>Select employee</option>
                            {employeeOptions.map((name) => (
                                <option key={name} value={name}>{name}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                        <input
                            value={category}
                            onChange={(e) => {
                                setCategory(e.target.value)
                            }}
                            className='text-sm py-2 px-3 w-4/5 rounded-lg outline-none bg-[#0b1220] border border-white/10 mb-4 focus:border-emerald-400/60' type="text" placeholder='design, dev, etc' required />
                    </div>
                </div>

                <div className='w-2/5 flex flex-col items-start'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea value={taskDescription}
                        onChange={(e) => {
                            setTaskDescription(e.target.value)
                        }} className='w-full h-44 text-sm py-2 px-4 rounded-lg outline-none bg-[#0b1220] border border-white/10 focus:border-emerald-400/60' name="" id="" required></textarea>
                    <button disabled={!assignTo} className='bg-emerald-500 py-3 hover:bg-emerald-400 text-slate-900 px-5 rounded-full text-sm mt-4 w-full font-semibold disabled:opacity-50'>Create Task</button>
                </div>

            </form>
        </div>
    )
}

export default CreateTask
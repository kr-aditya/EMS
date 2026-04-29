import React, { useContext } from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'
import { AuthContext } from '../../context/AuthProvider'

const EmployeeDashboard = (props) => {

  const [userData, setUserData] = useContext(AuthContext)
  const currentEmployee = userData?.find((employee) => employee.id === props.data?.id) || props.data

  const updateTaskStatus = (employeeId, taskIndex, action) => {
    setUserData((prev) => {
      if (!prev) return prev

      return prev.map((employee) => {
        if (employee.id !== employeeId) {
          return employee
        }

        const updatedTasks = employee.tasks.map((task, index) => {
          if (index !== taskIndex) return task

          if (action === 'accept') {
            return { ...task, newTask: false, active: true }
          }
          if (action === 'complete') {
            return { ...task, active: false, completed: true, failed: false }
          }
          if (action === 'fail') {
            return { ...task, active: false, completed: false, failed: true }
          }

          if (action === 'reopen') {
            return { ...task, active: true, completed: false, failed: false, newTask: false }
          }

          return task
        })

        const updatedCounts = { ...employee.taskCounts }

        if (action === 'accept') {
          updatedCounts.newTask = Math.max(0, updatedCounts.newTask - 1)
          updatedCounts.active = updatedCounts.active + 1
        }

        if (action === 'complete') {
          updatedCounts.active = Math.max(0, updatedCounts.active - 1)
          updatedCounts.completed = updatedCounts.completed + 1
        }

        if (action === 'fail') {
          updatedCounts.active = Math.max(0, updatedCounts.active - 1)
          updatedCounts.failed = updatedCounts.failed + 1
        }

        if (action === 'reopen') {
          updatedCounts.active = updatedCounts.active + 1
          if (employee.tasks[taskIndex]?.completed) {
            updatedCounts.completed = Math.max(0, updatedCounts.completed - 1)
          }
          if (employee.tasks[taskIndex]?.failed) {
            updatedCounts.failed = Math.max(0, updatedCounts.failed - 1)
          }
        }

        return {
          ...employee,
          tasks: updatedTasks,
          taskCounts: updatedCounts
        }
      })
    })
  }

  if (!currentEmployee) {
    return (
      <div className='min-h-screen w-full'>
        <div className='ems-shell'>
          <Header changeUser={props.changeUser} role='employee' />
          <div className='mt-10 text-gray-300'>Loading employee data...</div>
        </div>
      </div>
    )
  }

  return (
    <div className='min-h-screen w-full'>
      <div className='ems-shell'>
        <Header changeUser={props.changeUser} data={currentEmployee} role='employee' />
        <TaskListNumbers data={currentEmployee} />
        <TaskList data={currentEmployee} onTaskAction={updateTaskStatus} />
      </div>
    </div>
  )
}

export default EmployeeDashboard
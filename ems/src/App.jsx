import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'
import { getLocalStorage } from './utils/localStorage'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData] = useContext(AuthContext)

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')

    if (loggedInUser) {
      const storedUser = JSON.parse(loggedInUser)
      setUser(storedUser.role)
      if (storedUser.role === 'employee') {
        setLoggedInUserData(storedUser.data || null)
      }
    }

  }, [])


  const handleLogin = (email, password) => {
    const { admin } = getLocalStorage()
    const adminMatch = admin.find((a) => a.email === email && a.password === password)

    if (adminMatch) {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
      return
    }

    if (userData) {
      const employee = userData.find((e) => email === e.email && e.password === password)
      if (employee) {
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem(
          'loggedInUser',
          JSON.stringify({ role: 'employee', data: { id: employee.id, email: employee.email } })
        )
        return
      }
    }

    alert('Invalid Credentials')
  }

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('loggedInUser') || 'null')
    if (!stored || stored.role !== 'employee' || !userData) {
      return
    }

    const currentEmployee = userData.find((emp) => emp.id === stored.data?.id)
    if (currentEmployee) {
      setLoggedInUserData(currentEmployee)
    }
  }, [userData])

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user == 'admin' ? (
        <AdminDashboard changeUser={setUser} />
      ) : user == 'employee' ? (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
      ) : null}
    </>
  )
}

export default App

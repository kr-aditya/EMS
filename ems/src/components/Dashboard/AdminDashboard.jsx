import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashboard = (props) => {
    return (
        <div className='min-h-screen w-full'>
            <div className='ems-shell'>
                <Header changeUser={props.changeUser} role='admin' />
                <CreateTask />
                <AllTask />
            </div>
        </div>
    )
}

export default AdminDashboard
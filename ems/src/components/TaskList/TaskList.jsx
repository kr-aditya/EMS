import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data, onTaskAction }) => {
    if (!data?.tasks) return null

    return (
                <div id='tasklist' className='task-list overflow-x-auto flex items-stretch justify-start gap-5 flex-nowrap w-full py-1 mt-10'>
                        {!data.tasks.length && (
                            <div className='text-gray-400'>No tasks assigned yet.</div>
                        )}
                        {data.tasks.map((elem, idx) => {
                if (elem.active) {
                                        return (
                                            <AcceptTask
                                                key={idx}
                                                data={elem}
                                                onComplete={() => onTaskAction?.(data.id, idx, 'complete')}
                                                onFail={() => onTaskAction?.(data.id, idx, 'fail')}
                                            />
                                        )
                }
                if (elem.newTask) {
                                        return (
                                            <NewTask
                                                key={idx}
                                                data={elem}
                                                onAccept={() => onTaskAction?.(data.id, idx, 'accept')}
                                            />
                                        )
                }
                if (elem.completed) {
                                        return (
                                            <CompleteTask
                                                key={idx}
                                                data={elem}
                                                onReopen={() => onTaskAction?.(data.id, idx, 'reopen')}
                                            />
                                        )
                }
                if (elem.failed) {
                                                                                return (
                                                                                    <FailedTask
                                                                                        key={idx}
                                                                                        data={elem}
                                                                                        onReopen={() => onTaskAction?.(data.id, idx, 'reopen')}
                                                                                    />
                                                                                )
                }

            })}
        </div>
    )
}

export default TaskList
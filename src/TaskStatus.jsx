
import React from 'react'

export default function TaskStatus({taskStatus,handleComplete}) {
  return (
    <div>
        <h1 className='font-extrabold'>Task Status</h1>
        <p>Select a ticket to add to Task Status</p>


    <div className=' bg-base-200 p-4 rounded-xl'>
      
      <h2>Task Status</h2>
      {
        taskStatus.map(task => (
           <div key={task.id}  className='bg-amber-100 shadow-xl mb-2 p-3'> 

            <h3 className='font-semibold'>{task.title}</h3>

            <button onClick={() => handleComplete(task)} >Complete</button>
           </div> 
        ))
      }

    </div>

    </div>
  )
}

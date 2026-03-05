
import React from 'react'

export default function TaskStatus({inProgress,resolved, handleComplete}) {
  return (
    <div>
        <h1 className='font-extrabold'>Task Status</h1>
        


    <div className=' bg-base-200 p-4 rounded-xl'>
      
      <h2 className='font-semibold mb-2'>Task Status</h2>
      {
        inProgress.map(task => (
           <div key={task.id}  className='bg-amber-100 shadow-xl mb-2 p-3'> 

            <h3 className='font-semibold'>{task.title}</h3>

            <button className='btn btn-success btn-sm mt-2' onClick={() => handleComplete(task)} >Complete</button>
           </div> 
        ))
      }

      <h2 className='font-semibold'>Resolved Task</h2>
      {
        resolved.map(task => (
            <div key={task.id} className='mt-2 text-sm text-gray-600'>
                <i class="fa-solid fa-check"></i>{task.title}

            </div>
        ))
      }

    </div>

    </div>
  )
}

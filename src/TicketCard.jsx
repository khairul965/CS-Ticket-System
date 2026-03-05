import React from 'react'

export default function TicketCard({ ticket,handleAddTask }) {
    console.log(ticket.title);
  return (
    
    <div className='border-2 border-solid p-4 rounded-lg  my-2 bg-amber-50 shadow-xl cursor-pointer hover:shadow-2xl' onClick={() => handleAddTask(ticket)} >
      <div className='flex justify-between mb-1.5' > 
        <h2 className='font-bold'>{ticket.title} </h2>
        <span className={`p-3 rounded-2xl font-semibold
        ${ticket.status === "Open" ? "bg-green-500 text-green-800" : "bg-yellow-300 text-black"}
            `}>{ticket.status}  </span>
      </div>
      <p className='mb-1.5'>{ticket.description} </p>
      
      <div className='flex justify-between' >
        
        <div className='flex justify-between gap-4'>
            <p>#{ticket.id} </p>
            <span className={`${ticket.priority === "HIGH PRIORITY" ? "text-red-500"
                : ticket.priority === "MEDIUM PRIORITY" ? "text-orange-400"
                : "text-green-600"
            }
                `}>
                {ticket.priority}
            </span>
        </div>

        <div className='flex justify-between gap-4' >
            <p>{ticket.customer} </p>
            <p> <i class="fa-regular fa-calendar"></i> {ticket.createdAt} </p>
        </div>

      </div>
    </div>

  )
}

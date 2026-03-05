import React from 'react'

export default function TicketCard({ ticketCard }) {
    console.log(ticketCard.title);
  return (
    
    <div className='border-2 border-solid p-4 rounded-lg  my-2 bg-amber-50 shadow-xl' >
      <div className='flex justify-between mb-1.5' > 
        <h2 className='font-bold'>{ticketCard.title} </h2>
        <span className={`p-3 rounded-2xl font-semibold
        ${ticketCard.status === "Open" ? "bg-green-500 text-green-800" : "bg-yellow-300 text-black"}
            `}>{ticketCard.status}  </span>
      </div>
      <p className='mb-1.5'>{ticketCard.description} </p>
      
      <div className='flex justify-between' >
        
        <div className='flex justify-between gap-4'>
            <p>#{ticketCard.id} </p>
            <span className={`${ticketCard.priority === "HIGH PRIORITY" ? "text-red-500"
                : ticketCard.priority === "MEDIUM PRIORITY" ? "text-orange-400"
                : "text-green-600"
            }
                `}>
                {ticketCard.priority}
            </span>
        </div>

        <div className='flex justify-between gap-4' >
            <p>{ticketCard.customer} </p>
            <p> <i class="fa-regular fa-calendar"></i> {ticketCard.createdAt} </p>
        </div>

      </div>
    </div>

  )
}


import React from 'react'
import { useEffect,useState } from 'react';
import TicketCard from './TicketCard';


export default function TicketList( {tickets,handleAddTask}) {
   
    

    
  return (
        
        <div>
            <h1 className='font-extrabold'>Customer Tickets</h1>

            <div className=' grid grid-cols-1 md:grid-cols-2 gap-2'>  
            {
            tickets.map(ticket => <TicketCard ticket={ticket} key={ticket.id} handleAddTask={handleAddTask}></TicketCard>)
        }
        </div>

        </div>
  )
}

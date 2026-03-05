
import React from 'react'
import { useEffect,useState } from 'react';
import TicketCard from './TicketCard';


export default function TicketList( {TicketPromise,handleAddTask}) {
    const [tickets,setTickets] = useState([]);

    useEffect(() => {
        TicketPromise.then(data => {
            setTickets(data);
        });
    },[TicketPromise]);

    console.log(tickets);
  return (
        
        <div>
            <h1 className='font-extrabold'>Customer Tickets</h1>

            <div className=' grid grid-cols-1 md:grid-cols-2 gap-2'>  
            {
            tickets.map(ticket => <TicketCard ticket={ticket}  handleAddTask={handleAddTask}></TicketCard>)
        }
        </div>

        </div>
  )
}


import React from 'react'
import { useEffect,useState } from 'react';
import TicketCard from './TicketCard';


export default function TicketList( {TicketPromise}) {
    const [tickets,setTickets] = useState([]);

    useEffect(() => {
        TicketPromise.then(data => {
            setTickets(data);
        });
    },[TicketPromise]);

    console.log(tickets);
  return (
    <div >
        <h1>Customer Tickets:{tickets.length} </h1>

        <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-2'>  
            {
            tickets.map(ticketCard => <TicketCard ticketCard={ticketCard}></TicketCard>)
        }
        </div>
    </div>
  )
}

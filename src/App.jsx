import { Suspense, useEffect, useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Footer from './Footer'
import Footer2 from './Footer2'
import Banner from './Banner'
import TicketList from './TicketList'


const TicketPromise = fetch("Ticket.json")
.then(res => res.json())


function App() {
  
  return (
    <>
    <Navbar></Navbar>

    <Banner></Banner>

   <div className='max-w-[1200px] mx-auto'>
    <Suspense fallback={<p>Loading..</p>}>
     <TicketList TicketPromise={TicketPromise}></TicketList>
   </Suspense>
   </div>

   <Footer></Footer>
   <Footer2></Footer2>
    </>
  )
}

export default App




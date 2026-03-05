import { Suspense, useEffect, useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Footer from './Footer'
import Footer2 from './Footer2'
import Banner from './Banner'
import TicketList from './TicketList'
import TaskStatus from './TaskStatus'
import { toast, ToastContainer } from 'react-toastify'


const TicketPromise = fetch("Ticket.json")
.then(res => res.json())




function App() {
   const [tickets,setTickets] = useState([]);
  
  const [resolved, setResolved] = useState([]);
  const [inProgress, setInProgress] =useState([]);

  
const handleAddTask = (ticket) => {

  // check duplicate
  const alreadyAdded = inProgress.find(tick => tick.id === ticket.id);

  if(alreadyAdded){
    toast.error("Ticket already added!");
    return;
  }

  // remove from ticket list
  setTickets(prev => prev.filter(tick => tick.id !== ticket.id));

  // add to task status
  setInProgress(prev => [...prev, ticket]);

  toast.success("Added to Task Status!");
};

// complete
  const handleComplete =(ticket) => {
//remove from task status
   setInProgress(prev => prev.filter(tick => tick.id !== ticket.id));

//add to resolved
    setResolved(prev => [...prev,ticket]);
    
    toast.success("Task Complete!");
  }
  
  return (
    <>
    <Navbar></Navbar>

    <Banner inProgress={inProgress.length}
        resolved={resolved.length}
    ></Banner>

   <div className='max-w-[1200px] mx-auto grid grid-cols-[70%_30%] gap-2'>
   <div className=''>
     <Suspense fallback={<p>Loading..</p>}>
     <TicketList ticketPromise={TicketPromise} handleAddTask={handleAddTask}></TicketList>
   </Suspense>
   </div>
     
    <div className=''>
      <TaskStatus inProgress={inProgress}  resolved={resolved} handleComplete={handleComplete}></TaskStatus>
      </div>

    </div>
    

   <Footer></Footer>
   <Footer2></Footer2>
   
   <ToastContainer position='top-right'/>
    </>
  )
}

export default App




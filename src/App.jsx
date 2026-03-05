import { Suspense, useEffect, useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Footer from './Footer'
import Footer2 from './Footer2'
import Banner from './Banner'
import TicketList from './TicketList'
import TaskStatus from './TaskStatus'
import { toast } from 'react-toastify'


const TicketPromise = fetch("Ticket.json")
.then(res => res.json())


function App() {

  const [taskStatus, setTaskStatus] = useState([]);


  const handleAddTask = (ticket) =>{
    const exists = taskStatus.find(tick=>tick.id === ticket.id);
    if (exists){
      toast.warning("Already Added!");
      return;
    }
    setTaskStatus([...taskStatus,ticket]);
    toast.success("Added to Task Status!");
  };
  
  return (
    <>
    <Navbar></Navbar>

    <Banner></Banner>

   <div className='max-w-[1200px] mx-auto grid grid-cols-[70%_30%] gap-2'>
   <div className=''>
     <Suspense fallback={<p>Loading..</p>}>
     <TicketList TicketPromise={TicketPromise} handleAddTask={handleAddTask}></TicketList>
   </Suspense>
   </div>
     
    <div className=''>
      <TaskStatus taskStatus={taskStatus}></TaskStatus>
      </div>

    </div>
    

   <Footer></Footer>
   <Footer2></Footer2>
    </>
  )
}

export default App




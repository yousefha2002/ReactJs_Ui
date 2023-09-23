import React from 'react'
import 'react-calendar/dist/Calendar.css';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";



const events = [
    { title: 'Meeting', start: new Date() }
  ]
  
function Calender() {
  function handleChange(date:Date) {
    console.log(date);
  }
  return (
    <div className='Container h-[800px]'>
        <FullCalendar
        plugins={[dayGridPlugin,timeGridPlugin,interactionPlugin]}
        initialView='dayGridMonth'
        weekends={true}
        events={events}
        selectable={true}
        selectMirror={true}
        locale="en"
        dateClick={(date)=>handleChange(date.date)}
      />
    </div>
  )
}

export default Calender
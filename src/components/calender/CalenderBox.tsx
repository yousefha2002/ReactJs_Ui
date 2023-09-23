import React, { useState } from 'react'
import 'react-calendar/dist/Calendar.css';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import EventComponent from './RenderEvent';

type Event = {
    title:string,
    start:Date
}
function CalenderBox() {
    const [events,setEvents] = useState<Event[]>([{ title: 'Meeting', start: new Date()}]);
    function handleChange(date:DateClickArg) {
        const title = prompt("Please the event in selected day:");
        if(title){
            const start = new Date(date.date);
            const currentDay = new Date();
            start.setHours(currentDay.getHours())
            start.setMinutes(currentDay.getMinutes())
            setEvents(pre=>[...pre,{title,start}])
        }
      }
  return (
    <div>
        <FullCalendar
        plugins={[dayGridPlugin,timeGridPlugin,interactionPlugin]}
        initialView='dayGridMonth'
        weekends={true}
        events={events}
        selectable={true}
        editable={true}
        selectMirror={true}
        locale="en"
        dateClick={(date)=>handleChange(date)}
        eventColor='red'
        contentHeight={600}
        headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: ''
        }}
        eventContent={(info)=>(
            <EventComponent title={info.event.title} start={info.event.start||new Date()}/>
        )}
        />
    </div>
  )
}

export default CalenderBox
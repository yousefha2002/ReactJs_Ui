// EventComponent.tsx
import React from 'react';

type EventProps = {
  title: string;
  start:Date
};

const EventComponent: React.FC<EventProps> = ({ title ,start}) => {
    console.log(start);
  return (
    <div className=' bg-main w-full p-1 text-white'>
      <p>{start.getHours()<10?"0"+start.getHours():start.getHours()} : {start.getMinutes()<10?"0"+start.getMinutes():start.getMinutes()} - {title}</p>
    </div>
  );
};

export default EventComponent;

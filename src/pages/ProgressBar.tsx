import React from 'react'
import Progress from '../components/progress/Progress'

export default function ProgressBar() {
    return (
        <div className='Container flex flex-col gap-y-12'>
            <Progress percentage={50} text='HTML'/>
            <Progress percentage={70} text='CSS'/>
            <Progress percentage={60} text='JS'/>
        </div>
    )
}

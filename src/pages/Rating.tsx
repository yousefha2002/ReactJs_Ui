import React from 'react'
import RatingBox from '../components/rating/RatingBox'

export default function Rating() {
    return (
        <div className='Container'>
            <h3 className='font-bold mb-2'>Controlled</h3>
            {/** rate === 0 >> controlled */}
            <RatingBox rate={0}/>
            <br/>
            {/** rate between 1 - 5 >> readonly */}
            <h3 className='font-bold mb-2'>Readonly</h3>
            <RatingBox rate={3}/>

        </div>
    )
}

import React from 'react'
import Basic from '../components/spinner/Basic'
import Dots from '../components/spinner/Dots'
import Dashed from '../components/spinner/Dashed'

export default function Spinner() {
    return (
        <div className='Container flex items-center gap-x-16'>
            <Basic/>
            <Dots/>
            <Dashed/>
        </div>
    )
}

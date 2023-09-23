import React from 'react'
import topics from '../utils/topics'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className='Container flex flex-wrap items-center gap-3'>
            {
                topics.map(item=>{
                    return(
                        <Link key={item.id} to={`${item.link}`}>
                            <div className='py-2 px-4 bg-main text-white rounded-[99999px]'>{item.title}</div>
                        </Link>
                    )
                })
            }
        </div>
    )
}

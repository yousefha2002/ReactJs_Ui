import React, { useState } from 'react'
import ModalBox from '../components/modal/ModalBox';

export default function Modal() {
    const [showModal, setShowModal] = useState(false);

    function handleClose()
    {
        setShowModal(false)
    }

    return (
        <div className='Container'>
            <div className="text-center py-3">
                <button onClick={()=>setShowModal(true)}
                className="bg-main text-white px-3 py-2 rounded hover:scale-95 transition text-xl">
                    Open Modal
                </button>
            </div>
            {
                showModal&&<ModalBox handleClose={handleClose}/>
            }
        </div>
    )
}

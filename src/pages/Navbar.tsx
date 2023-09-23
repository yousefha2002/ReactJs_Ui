import { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { BsList } from 'react-icons/bs';

const Navbar = () => {
    let Links =[
        {name:"Home",link:"/"},
        {name:"About",link:"/"},
        {name:"Contact",link:"/"},
        {name:"Service",link:"/"},
    ];
    const [open,setOpen] = useState(false);
    return (
        <div className='shadow-md w-full fixed top-0 left-0'>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
                <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
                text-gray-800'>
                    Navbar
                </div>
                <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    {open?<AiOutlineClose/>:<BsList/>}
                </div>
                <ul className={`md:flex md:items-center md:pb-0 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12 ':'top-[-490px]'}`}>
                    {
                    Links.map((link)=>(
                        <li key={link.name} className='md:ml-8 text-lg md:my-0 my-7'>
                            <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
                        </li>
                    ))
                    }
                </ul>
            </div>
        </div>
    )
}
export default Navbar ;
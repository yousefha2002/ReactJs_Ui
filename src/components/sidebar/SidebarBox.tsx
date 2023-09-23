import { AiOutlineClose ,AiOutlineHome} from 'react-icons/ai';
import { Link } from 'react-router-dom';

type props = {
    isOpen: boolean;
    onClose: () => void;
}

const SidebarBox  = ({ isOpen, onClose }:props) => {
    return (
        <div className='md:relative md:block md:w-1/4 lg:w-1/6'>
            <div
            className={`fixed inset-y-0 left-0 w-[60%] md:w-1/4 lg:w-1/6 bg-white shadow z-50 transition-transform transform ${
                isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
            >
            <button
                className="md:hidden absolute top-4 right-2 text-[#0000008a]"
                onClick={onClose}
            >
                <AiOutlineClose/>
            </button>
            <div className="p-4">
                <ul className="list-none">
                    <Link to={'/sidebar'}>
                        <li className="flex items-center mb-2">
                            <AiOutlineHome className="mr-2" />
                            <span className="text-black">Home</span>
                        </li>
                    </Link>
                    {/* Add more list items here */}
                </ul>
                </div>
            </div>
        </div>
    );
};

export default SidebarBox;
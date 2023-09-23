import { BsList } from 'react-icons/bs';

type props =  {
    onToggle: () => void;
}

const Navbar = ({ onToggle }:props) => {
    return (
        <nav className="bg-main p-4">
            <div className="gap-x-2 flex items-center">
                <button className="text-white md:hidden" onClick={onToggle}>
                    <BsList/>
                </button>
                <h3 className='text-white'>Drawer</h3>
            </div>
        </nav>
    );
};

export default Navbar;
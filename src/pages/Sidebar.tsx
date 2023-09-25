import {useState, useEffect } from "react";
import SidebarBox from "../components/sidebar/SidebarBox";
import Navbar from "../components/sidebar/Navbar";

const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Use useEffect to set the initial state based on screen size
    useEffect(() => {
        const mdMediaQuery = window.matchMedia("(min-width: 768px)");

        // Set the initial state based on the media query
        setIsSidebarOpen(mdMediaQuery.matches);

        // Listen for changes in screen size and update the state accordingly
        const handleMediaQueryChange = (e: MediaQueryListEvent) => {
        setIsSidebarOpen(e.matches);
        };

        mdMediaQuery.addEventListener("change", handleMediaQueryChange);

        // Cleanup the event listener when the component unmounts
        return () => {
        mdMediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex">
            {/* Sidebar */}
            <SidebarBox isOpen={isSidebarOpen} onClose={toggleSidebar} />

            <div className="flex-1 flex flex-col">
                {/* Navbar */}
                <Navbar onToggle={toggleSidebar} />

                {/* Content */}
                <main className="flex-1">
                </main>
            </div>
        </div>
    );
};

export default Sidebar;
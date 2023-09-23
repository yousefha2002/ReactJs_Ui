// Tabs.tsx
import React, { ReactNode, useState } from 'react';

interface TabsProps {
    children: ReactNode;
}

const TabsBox = ({ children }:TabsProps) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div>
        <ul className="flex border-b">
            {React.Children.map(children, (child, index) => {
            if (React.isValidElement(child)) {
                return (
                <li
                    key={index}
                    className={`mr-6 pb-1 cursor-pointer ${
                    activeTab === index ? 'border-b-2 border-main' : ''
                    }`}
                    onClick={() => setActiveTab(index)}
                >
                    {child.props.label}
                </li>
                );
            }
            return null;
            })}
        </ul>
        <div className="mt-2">
            {React.Children.map(children, (child, index) => {
            if (React.isValidElement(child)) {
                return (
                <div
                    key={index}
                    className={`${
                    activeTab === index ? 'block' : 'hidden'
                    } p-4`}
                >
                    {child.props.children}
                </div>
                );
            }
            return null;
            })}
        </div>
        </div>
    );
};

export default TabsBox;
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react"; // Import useState from React

type props = {
    item: {
        id: number;
        question: string;
        answer: string;
    };
    };

    export default function AccordionBox({ item }: props) {
    const [isOpen, setIsOpen] = useState(false)

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <details
            className={`w-full border rounded-lg shadow bg-white`}
            open={false}
            >
            <summary
                className="px-4 py-6 focus:outline-none focus-visible:ri relative list-none"
                onClick={toggleAccordion}
            >
                {item.question}
                <span className="absolute inset-y-0 right-4 flex items-center">
                {isOpen ? <IoIosArrowDown /> : <IoIosArrowUp />}
                </span>
            </summary>
            <p className="px-4 py-6 pt-0 -mt-4">{item.answer}</p>
        </details>
    );
}

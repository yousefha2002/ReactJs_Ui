import { MdEmail } from 'react-icons/md';

type props = {
    badgeContent:number,
    horizontal:string,
    vertical:string
}

export default function BadgeBox({badgeContent,vertical,horizontal}:props) {
    const badgePosition = {
        vertical: vertical === "top" ? '-top-2' : '-bottom-2',
        horizontal: horizontal === "right" ? '-right-2' : '-left-2',
    };
    return (
        <div className="relative inline-flex items-center">
            <MdEmail className="text-[38px] text-[#0000008a]" />
            {badgeContent!==0&&
            <div className={`absolute flex items-center justify-center p-1 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full 
            ${badgePosition.vertical} ${badgePosition.horizontal}`}>
                <div className="flex items-center justify-center min-w-[16px] min-h-[16px]">
                    {badgeContent>99?"+99":badgeContent}
                </div>
            </div>}
        </div>
    )
}
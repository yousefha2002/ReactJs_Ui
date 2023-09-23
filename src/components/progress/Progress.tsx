type Props = {
    percentage: number;
    text: string;
};

export default function Progress({ percentage, text }: Props) {
    return (
        <div>
            <div className="flex justify-between mb-2">
                <h3>{text}</h3>
                <span className="text-gray-600">{percentage}%</span>
            </div>
            <div className="h-[6px] rounded-md w-full bg-gray-300 relative">
                <div
                    style={{ width: `${percentage}%` }}
                    className={`h-full rounded-md bg-main relative`}
                ></div>
            </div>
        </div>
    );
}
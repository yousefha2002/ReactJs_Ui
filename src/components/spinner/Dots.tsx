import React from 'react'

export default function Dots() {
    return (
        <div className="flex items-center justify-center space-x-2">
            <div className="w-4 h-4 rounded-full animate-pulse bg-main"></div>
            <div className="w-4 h-4 rounded-full animate-pulse bg-main"></div>
            <div className="w-4 h-4 rounded-full animate-pulse bg-main"></div>
        </div>
    )
}

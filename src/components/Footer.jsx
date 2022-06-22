import React,{useState} from 'react'

export const Footer = () => {
    const date=new Date(). getFullYear() ;

    const [year, setYear] = useState(date);
    return (
        <div className="text-center p-10 mt-10 border-t dark:border-gray-700 border-gray-500">
            <h1>{year} Googli ©, Inc.</h1>
        </div>
    )
}

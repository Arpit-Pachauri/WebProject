import React, {useState,useContext,createContext} from 'react';

const ResultContext=createContext();
const baseUrl='https://google-search3.p.rapidapi.com/api/v1';

export const ResultContextProvider = ({children}) => {
      const [results,setResults]=useState([]);
      const [isloading, setIsloading] = useState(false);  
      const [searchTerm, setSearchTerm] = useState('');
      const [darkTheme, setDarkTheme] = useState(false);
    const getReslults=async (type)=>{
        console.log(`${baseUrl}${type}`);
        setIsloading(true);
        const response=await fetch(`${baseUrl}${type}`,{
           method: 'GET',
           headers:{
            "x-user-agent": "desktop",
            "x-proxy-location": "US",
            'x-rapidapi-host': 'google-search3.p.rapidapi.com',
            'x-rapidapi-key': '3da230c9acmshb6c3d87ce903dc0p13e9aejsnc9b7da470260'  
           }     
        });
       const data=await response.json();
       if(type.includes('/news')){
           setResults((prev)=>{
              prev=data.entries;
            //   console.log(prev,'gajar');
              return prev;
           });
        //    console.log(results,'aloo');
       }
       else if(type.includes('/images')){
           setResults(data.image_results);
       }
       else{
           setResults(data.results);
       }
    //    setResults(data);
       setIsloading(false);
    }
    return (
   <ResultContext.Provider value={{getReslults,isloading,results,searchTerm,setSearchTerm,darkTheme, setDarkTheme}}>
       {children}
   </ResultContext.Provider>
    );
}
export const useResultContext=()=>useContext(ResultContext);

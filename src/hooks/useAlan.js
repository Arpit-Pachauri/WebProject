import React,{useEffect,useState,useCallback} from 'react'
import alanBtn from '@alan-ai/alan-sdk-web';
import {useResultContext} from '../Context/ResultContextProvider';
const COMMANDS={
    SEARCH:'search-name',
    LTHEME: 'light-theme',
    DTHEME: 'dark-theme'
}
const useAlan = () => {
    const [alanInstance, setAlanInstance] = useState();
    const {getReslults,isloading,results,setSearchTerm,darkTheme, setDarkTheme}= useResultContext(); 
    // console.log(darkTheme,'akjdfkjfk');
    const search=useCallback(({detail:text})=>{
        alanInstance.playText(`searching ${text}`);
        // searchTerm=text;
        setSearchTerm(text);
        // getReslults(`/search/q=${text}&num=40`);
        // getReslults(`/search/q=  ${text} videos`);
    },[alanInstance]);
    const setlightTheme=useCallback(({detail:text})=>{
        alanInstance.playText(`switching to light theme`);
        setDarkTheme(false);
    },[alanInstance]);
    const setdarkTheme=useCallback(({detail:text})=>{
        alanInstance.playText(`switching to dark theme`);
        setDarkTheme(true);
    },[alanInstance]);
    useEffect(()=>{
    window.addEventListener(COMMANDS.SEARCH,search);    
    window.addEventListener(COMMANDS.LTHEME,setlightTheme);    
    window.addEventListener(COMMANDS.DTHEME,setdarkTheme);    
    return ()=>{
        window.removeEventListener(COMMANDS.SEARCH,search);
        window.removeEventListener(COMMANDS.LTHEME,setlightTheme);
        window.removeEventListener(COMMANDS.DTHEME,setdarkTheme);
    }
    },[search]);
    useEffect(()=>{
      if(alanInstance!=null) return;
      setAlanInstance(
      alanBtn({
          top:"12px",
          left: "150px",
          key:process.env.REACT_APP_ALAN_KEY,
          onCommand: ({command,text})=>{
            //   console.log("this is the command",command,text,"here it ends");
            console.log(command);
              window.dispatchEvent(new CustomEvent(command,{detail:text}));
          }
      }));
  },[])
    return null;
}

export default useAlan

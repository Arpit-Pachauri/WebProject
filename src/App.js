import React ,{useState,useContext,createContext} from 'react';
import {Rout} from './components/Rout';
import {Footer} from './components/Footer';
import {Navbar} from './components/Navbar';
import  { useResultContext } from './Context/ResultContextProvider';
// import {ResultContextProvider} from './Context/ResultContextProvider';
import useAlan from './hooks/useAlan';
function App() {
  useAlan();
  const {darkTheme,setDarkTheme}= useResultContext();
  return (
    <div className={darkTheme ? 'dark' : ''}>
     <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
     <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
     <Rout/>
     <Footer/>
    </div>
    </div>

  );
}
export default App;

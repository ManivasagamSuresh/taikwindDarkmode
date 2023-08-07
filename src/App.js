import { useEffect, useState } from "react";
import Sample from "./sample";


function App() {
  const [theme,setTheme]= useState('light')
  useEffect(()=>{
    
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  },[theme])
  return (
    <div className="p-10 font-bold h-screen text-blue-800 flex flex-col gap-5 items-center justify-center bg-slate-400 dark:bg-black dark:text-gray-50" >
        <div>MB</div>
        <div onClick={()=>{setTheme("dark");localStorage.setItem("theme","dark")}}>dark</div>      
        <div onClick={()=>{localStorage.setItem("theme","light");setTheme("light")}}>Light</div>  
        <Sample/>    
        <div>MB</div>            
    </div>
  );
}

export default App;

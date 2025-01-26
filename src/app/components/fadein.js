import {useEffect,useState} from 'react'
export function fadeInEffect(){
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(()=>{
        const timer = setTimeout(()=>{
          setFadeIn(true);
  
        },100);
  
        return ()=>clearTimeout(timer);
    },[]);

    return fadeIn ? "fade-in-on-screen-change":"";
}
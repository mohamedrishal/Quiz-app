import  { useEffect, useState } from 'react'

function Time({questionNumber,setStop}) {

    const [timer,setTimer] = useState(20)

    useEffect(()=>{
        if(timer===0) return  setStop(true)
        const intervel = setInterval(()=>{
            setTimer((prev)=> prev - 1)
        },1000);
        return ()=> clearInterval(intervel)
    },[setStop,timer]);

    useEffect(()=>{
        setTimer(20)
    },[questionNumber])

  return  timer;
}

export default Time
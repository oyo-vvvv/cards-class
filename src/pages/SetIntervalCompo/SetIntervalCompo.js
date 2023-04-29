import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";

const SetIntervalCompo = () => {
  const [time, setTime] = useState(0);
  useEffect(() => {
    const SetIntervalId = setInterval(()=>{
        setTime(prevstate => prevstate +1)
    }, 1000)
    return()=> clearInterval(SetIntervalId )
  }, [])



  return (
    <>
      <Navbar />
      <h1>Mon compteur tourne depuis : {time} </h1>
    </>
  );
};

export default SetIntervalCompo;

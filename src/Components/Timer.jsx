import { useEffect, useState } from "react";

const Timer = ({ seconds }) => {
  const [time, setTime] = useState({
    minutes: null,
    seconds: null,
  });

  useEffect(() => {
    setTime({
      minutes: Math.floor(seconds/60),
      seconds: convertSeconds()
    });
  }, [seconds]);
  
  const convertSeconds = () => {
    const convertedSeconds = Math.round((seconds/60 - Math.floor(seconds/60)) * 60);
    let paddedSeconds = convertedSeconds.toString();
    if (paddedSeconds.length < 2) paddedSeconds = '0'.concat('', paddedSeconds);
    
    return paddedSeconds;
  }

  return (
    <div className='timer-container'>
      <p>{time.minutes}:{time.seconds}</p>
    </div>
  );
}

export default Timer;
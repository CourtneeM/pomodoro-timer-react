import { useEffect, useRef, useState } from 'react';

import TimerOptions from './Components/TimerOptions';
import Timer from './Components/Timer';
import TimerControls from './Components/TimerControls';
import Instructions from './Components/Instructions';

import './styles/css/App.css';

function App() {
  const [prevTime, setPrevTime] = useState(null);
  const [seconds, setSeconds] = useState(1500);
  const [startTimer, setStartTimer] = useState(false);
  const interval = useRef(null);

  useEffect(() => {
    if (startTimer) {
      interval.current = setInterval(() => setSeconds(prevSeconds => prevSeconds - 1), 1000);
    }

    return () => clearInterval(interval.current);
  }, [startTimer]);

  useEffect(() => {
    if (seconds <= 0) {
      setStartTimer(false);
      clearInterval(interval.current);
    }
  }, [seconds]);

  const start = () => setStartTimer(true);
  const stop = () => setStartTimer(false);
  const reset = () => {
    setStartTimer(true);
    setSeconds(prevTime);
  }

  const selectTime = (time) => {
    setStartTimer(false);
    setPrevTime(time);
    setSeconds(time);
    clearInterval(interval.current);
  }

  return (
    <div className="App">
      <h1>Pomodoro Timer</h1>
      <TimerOptions {...{ selectTime }} />
      <Timer seconds={seconds} />
      <TimerControls {...{ start, stop, reset }} />
      <Instructions />
    </div>
  );
}

export default App;

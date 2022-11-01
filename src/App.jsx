import { useEffect, useRef, useState } from 'react';

import TimerOptions from './Components/TimerOptions';
import Timer from './Components/Timer';
import TimerControls from './Components/TimerControls';
import TimerProgress from './Components/TimerProgress';
import Instructions from './Components/Instructions';

import './styles/css/App.css';

function App() {
  const [seconds, setSeconds] = useState(5);
  const [startTimer, setStartTimer] = useState(false);

  useEffect(() => {
    let interval;
    if (startTimer) {
      interval = setInterval(() => setSeconds(prevSeconds => prevSeconds - 1), 1000);
    }

    return () => clearInterval(interval);
  }, [startTimer]);

  const start = () => setStartTimer(true);
  const stop = () => setStartTimer(false);
  const reset = () => {
    setStartTimer(true);
    setSeconds(5);
  }

  return (
    <div className="App">
      <TimerOptions />
      <Timer seconds={seconds} />
      <TimerControls {...{ start, stop, reset }} />
      <TimerProgress />
      <Instructions />
    </div>
  );
}

export default App;

import playDark from '../assets/play-dark.png'
import playLight from '../assets/play-light.png'
import pauseDark from '../assets/pause-dark.png'
import pauseLight from '../assets/pause-light.png'
import repeatDark from '../assets/repeat-dark.png'
import repeatLight from '../assets/repeat-light.png'

const TimerControls = ({ start, stop, reset }) => {
  return (
    <div className='controls-container'>
      <div onClick={start}>
        <img src={playDark} alt="play" />
      </div>
      <div onClick={stop}>
        <img src={pauseDark} alt="pause" />
      </div>
      <div onClick={reset}>
        <img src={repeatDark} alt="repeat" />
      </div>
    </div>
  );
}

export default TimerControls;
import playDark from '../assets/play-dark.png'
import playLight from '../assets/play-light.png'
import pauseDark from '../assets/pause-dark.png'
import pauseLight from '../assets/pause-light.png'
import repeatDark from '../assets/repeat-dark.png'
import repeatLight from '../assets/repeat-light.png'
import { useEffect } from 'react'

const TimerControls = ({ start, stop, reset }) => {
  useEffect(() => {
    const resetControls = () => {
      [...document.querySelectorAll('.controls-container div')].forEach((el, i) => {
        const [play, pause, repeat] = [playDark, pauseDark, repeatDark];
        
        el.removeAttribute('id');
        el.querySelector('img').src = [play, pause, repeat][i];
      });
    }

    [...document.querySelectorAll('.options-container div')].forEach((el) => {
      el.addEventListener('click', () => resetControls());
    });
  }, []);

  const selectedControl = (e, action) => {
    [...document.querySelectorAll('.controls-container div')].forEach((el, i) => {
      const [play, pause, repeat] = [playDark, pauseDark, repeatDark];
      
      el.removeAttribute('id');
      el.querySelector('img').src = [play, pause, repeat][i];
    });
    e.target.id = 'selected-control';
    
    if (e.target.querySelector('img[alt="play"]')) {
      e.target.querySelector('img').src = playLight;
    } else if (e.target.querySelector('img[alt="pause"]')) {
      e.target.querySelector('img').src = pauseLight;
    } else if (e.target.querySelector('img[alt="repeat"]')) {
      e.target.querySelector('img').src = repeatLight;
    }

    action();
  }

  return (
    <div className='controls-container'>
      <div onClick={(e) => selectedControl(e, start)}>
        <img src={playDark} alt="play" />
      </div>
      <div onClick={(e) => selectedControl(e, stop)}>
        <img src={pauseDark} alt="pause" />
      </div>
      <div onClick={(e) => selectedControl(e, reset)}>
        <img src={repeatDark} alt="repeat" />
      </div>
    </div>
  );
}

export default TimerControls;
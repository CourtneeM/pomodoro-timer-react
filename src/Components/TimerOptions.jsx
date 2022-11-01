import { useEffect, useState } from "react";

const TimerOptions = ({ selectTime }) => {
  const [selectedOption, setSelectedOption] = useState('pomodoro');
  
  useEffect(() => {
    const times = {
      'pomodoro': 25*60,
      'short break': 5*60,
      'long break': 15*60
    }

    selectTime(times[selectedOption]);
  }, [selectedOption]);

  

  const changeSelected = (e) => {
    const optionsContainer = document.querySelector('.options-container');
    optionsContainer.querySelector('#selected-option').removeAttribute('id');

    e.target.id = 'selected-option';
    setSelectedOption(e.target.textContent.toLowerCase());
  }

  return (
    <div className='options-container'>
      <div id='selected-option' className='pomodoro-container' onClick={changeSelected}>
        <p>Pomodoro</p>
      </div>
      <div className='short-break-container' onClick={changeSelected}>
        <p>Short Break</p>
      </div>
      <div className='long-break-container' onClick={changeSelected}>
        <p>Long Break</p>
      </div>
    </div>
  );
}

export default TimerOptions;
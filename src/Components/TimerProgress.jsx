const TimerProgress = ({ round, current }) => {
  return (
    <div className='progress-container'>
      <div className='progress-bar'></div>
      <div className='round-container'>
        <p>Round #1: Pomodoro</p>
      </div>
    </div>
  );
}

export default TimerProgress;
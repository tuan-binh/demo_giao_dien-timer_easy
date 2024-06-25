import ActionsTime from '../components/ActionsTime';
import ShowTime from '../components/ShowTime';
import { useState } from 'react';

function TimerEasy() {
  const [time, setTime] = useState(60);
  const [idInterval, setIdInterval] = useState(null);
  const handleStart = () => {
    setIdInterval(
      setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000)
    );
  };

  const handlePause = () => {
    clearInterval(idInterval);
  };

  const handleClear = () => {
    setTime(60);
    clearInterval(idInterval);
  };

  // lifting state up
  /**
   *        component cha
   *        |           \
   * component con 1    component con 2
   *
   */
  return (
    <div>
      <ShowTime time={time} />
      <ActionsTime handleStart={handleStart} handlePause={handlePause} handleClear={handleClear} />
    </div>
  );
}

export default TimerEasy;

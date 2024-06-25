function ActionsTime({ handleStart, handlePause, handleClear }) {
  return (
    <>
      <button onClick={handleStart}>start</button>
      <button onClick={handlePause}>pause</button>
      <button onClick={handleClear}>clear</button>
    </>
  );
}

export default ActionsTime;

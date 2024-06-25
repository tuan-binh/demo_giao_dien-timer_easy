import TimerEasy from './pages/TimerEasy';
import UserManage from './pages/UserManage';

function App() {
  const now = new Date();
  return (
    <>
      <UserManage />
      {now.toLocaleTimeString()}
      {/* <TimerEasy /> */}
    </>
  );
}

export default App;

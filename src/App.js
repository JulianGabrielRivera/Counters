import './App.css';
import Counter from './components/01-use-state/Counter';
import { useState } from 'react';
import Timer from './components/02-use-state/Timer';
import TimerTwo from './components/03-use-effect-mounting/TimerTwo';
import TimerThree from './components/04-use-effect-unmounting/TimerThree';
import TimerFour from './components/05-use-effect-conditional-updates/TimerFour';
import IronbnbList from './components/IronbnbList';

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className='App'>
      {/* gets created and destroyed  */}
      <button onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'}</button>
      {/* {show && <Counter />} */}
      {/* {show && <Timer />} */}
      {/* {show && <TimerTwo />} */}
      {/* this is mounting and unmounting */}
      {show && <TimerThree />}

      {/* add a class of show or hide here so that when we hide, it still runs in the background ,we are just hiding the timer but not actually unmounting it */}
      <div class>
        <TimerTwo />
      </div>
      {/* its never getting unmounted  ifwe add a div */}
      {/* {show && <TimerFour />} */}
      {/* {show && <IronbnbList />} */}
      {/* <TimerThree /> */}
    </div>
  );
}

export default App;

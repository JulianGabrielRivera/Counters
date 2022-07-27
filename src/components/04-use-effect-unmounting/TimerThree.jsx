// ./src/components/04-use-effect-unmounting/TimerThree.js

import React, { useState, useEffect } from 'react';

function TimerThree() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('useEffect - Mounting (initial render)');

    const id2 = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    console.log(id2);
    // Return a "cleanup function" which will run automatically
    // before the component is removed from the DOM
    return () => {
      // <== ADD
      console.log('Cleanup - Component Unmounting');
      clearInterval(id2);
    };
  }, []);

  return (
    <div className='Timer'>
      <h2>Timer Three</h2>

      <h3>{count}</h3>
    </div>
  );
}

export default TimerThree;

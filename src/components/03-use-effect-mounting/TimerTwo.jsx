// src/components/03-use-effect-mounting/TimerTwo.js

import React, { useState, useEffect } from 'react'; // <== IMPORT
// when we do hide it destroys it and then restarts its memorry
function TimerTwo() {
  const [count, setCount] = useState(0);

  // Add the effect in the function body
  useEffect(() => {
    console.log('useEffect - Mounting (initial render)');

    const id = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    console.log(id);
  }, []); // <--  [] means: Run the effect only once, after initial render

  return (
    <div className='Timer'>
      <h2>Timer Two</h2>

      <h3>{count}</h3>
    </div>
  );
}

export default TimerTwo;

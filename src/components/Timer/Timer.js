import React, { useState, useEffect } from 'react'

function Timer() {
  const [seconds, setSeconds] = useState(100);

  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setSeconds('----------');
    }
  });

  return (
    <div className="timer">
      {seconds}
    </div>
  );
}

export default Timer;
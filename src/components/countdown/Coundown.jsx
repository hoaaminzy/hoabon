import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ countdownTime, onTimerEnd, onTimerStop }) => {
  const [remainingTime, setRemainingTime] = useState(countdownTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
      onTimerStop(remainingTime); // Gọi hàm xử lý khi đồng hồ dừng lại và truyền thời gian còn lại
    };
  }, [countdownTime, remainingTime, onTimerStop]);

  useEffect(() => {
    if (remainingTime === 0) {
      onTimerEnd();
    }
  }, [remainingTime, onTimerEnd]);

  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;

  return (
    <div className='fs-1 fw-bold text-danger'>
      {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
    </div>
  );
};

export default CountdownTimer;

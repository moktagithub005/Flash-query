import { useEffect, useState } from "react";

export function useTimer(startSeconds, isRunning) {
  const [seconds, setSeconds] = useState(startSeconds);

  useEffect(() => {
    setSeconds(startSeconds);
  }, [startSeconds]);

  useEffect(() => {
    if (!isRunning) return undefined;
    if (seconds <= 0) return undefined;

    const id = setInterval(() => {
      setSeconds((prev) => Math.max(prev - 1, 0));
    }, 1000);

    return () => clearInterval(id);
  }, [isRunning, seconds]);

  return seconds;
}

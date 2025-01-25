import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 1,
    hours: 8,
    minutes: 15,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const newSeconds = prev.seconds - 1;
        if (newSeconds >= 0) return { ...prev, seconds: newSeconds };
        
        const newMinutes = prev.minutes - 1;
        if (newMinutes >= 0) return { ...prev, minutes: newMinutes, seconds: 59 };
        
        const newHours = prev.hours - 1;
        if (newHours >= 0) return { ...prev, hours: newHours, minutes: 59, seconds: 59 };
        
        const newDays = prev.days - 1;
        if (newDays >= 0) return { ...prev, days: newDays, hours: 23, minutes: 59, seconds: 59 };
        
        clearInterval(timer);
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeBox = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-white border-2 border-red-500 rounded-lg p-3 min-w-[60px] text-red-500 text-3xl font-bold">
        {String(value).padStart(2, "0")}
      </div>
      <div className="text-gray-600 text-sm mt-1 uppercase">{label}</div>
    </div>
  );

  return (
    <div className="bg-red-50 p-6 rounded-xl shadow-md mb-8 animate-fade-in">
      <h2 className="text-xl md:text-2xl font-semibold mb-6 text-gray-800">
        ⌛ Limited Time Offer! Download the Course Before Time Runs Out!
      </h2>
      <div className="flex justify-center items-center gap-2">
        <TimeBox value={timeLeft.days} label="Days" />
        <div className="text-red-500 text-3xl font-bold mb-5">:</div>
        <TimeBox value={timeLeft.hours} label="Hours" />
        <div className="text-red-500 text-3xl font-bold mb-5">:</div>
        <TimeBox value={timeLeft.minutes} label="Minutes" />
        <div className="text-red-500 text-3xl font-bold mb-5">:</div>
        <TimeBox value={timeLeft.seconds} label="Seconds" />
      </div>
    </div>
  );
};

export default CountdownTimer;
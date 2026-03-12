import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const eventDate = new Date("2026-03-13T11:00:00+05:30").getTime();

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const diff = eventDate - now;
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((diff % (1000 * 60)) / 1000),
      expired: false,
    };
  }

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  if (timeLeft.expired) {
    return (
      <div className="text-center py-4">
        <p className="text-2xl font-display font-bold text-primary">🎉 The Exhibition is Live Now!</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center gap-3 sm:gap-5">
      {units.map((unit) => (
        <div key={unit.label} className="flex flex-col items-center">
          <div className="bg-card shadow-summer rounded-lg w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center border border-border">
            <span className="text-2xl sm:text-3xl font-display font-bold text-primary">
              {String(unit.value).padStart(2, "0")}
            </span>
          </div>
          <span className="text-xs sm:text-sm font-body text-muted-foreground mt-2">{unit.label}</span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;

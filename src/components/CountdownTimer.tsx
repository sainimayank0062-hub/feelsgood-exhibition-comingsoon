import { useState, useEffect } from "react";

const CountdownTimer = () => {
  // Event runs 13 & 14 March 2026
  const eventStart = new Date("2026-03-13T11:00:00+05:30").getTime();
  const eventEnd = new Date("2026-03-14T20:00:00+05:30").getTime();

  const [timeState, setTimeState] = useState(calculate());

  function calculate() {
    const now = new Date().getTime();
    if (now >= eventStart && now <= eventEnd) {
      return { type: "live" as const, days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    if (now > eventEnd) {
      return { type: "ended" as const, days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    const diff = eventStart - now;
    return {
      type: "upcoming" as const,
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((diff % (1000 * 60)) / 1000),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => setTimeState(calculate()), 1000);
    return () => clearInterval(timer);
  }, []);

  if (timeState.type === "live") {
    return (
      <div className="py-3 px-6 bg-primary/10 border border-primary/30 rounded-xl inline-block">
        <p className="text-lg sm:text-xl font-display font-bold text-primary animate-pulse">
          🎉 Exhibition is LIVE Now! Visit Us Today!
        </p>
      </div>
    );
  }

  if (timeState.type === "ended") {
    return (
      <div className="py-3 px-6 bg-muted rounded-xl inline-block">
        <p className="text-lg font-display font-semibold text-foreground">
          The exhibition has ended. Website will be back soon! 🙏
        </p>
      </div>
    );
  }

  const units = [
    { label: "Days", value: timeState.days },
    { label: "Hours", value: timeState.hours },
    { label: "Min", value: timeState.minutes },
    { label: "Sec", value: timeState.seconds },
  ];

  return (
    <div className="flex justify-center gap-3 sm:gap-4">
      {units.map((unit, i) => (
        <div key={unit.label} className="flex items-center gap-3 sm:gap-4">
          <div className="flex flex-col items-center">
            <div className="bg-card shadow-summer rounded-xl w-16 h-16 sm:w-[72px] sm:h-[72px] flex items-center justify-center border border-primary/20">
              <span className="text-2xl sm:text-3xl font-display font-bold text-primary tabular-nums">
                {String(unit.value).padStart(2, "0")}
              </span>
            </div>
            <span className="text-[10px] sm:text-xs font-body text-muted-foreground mt-1.5 uppercase tracking-wider">{unit.label}</span>
          </div>
          {i < units.length - 1 && (
            <span className="text-xl font-bold text-primary/40 mb-4">:</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;

"use client";

import { useEffect, useState } from "react";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

function formatNow() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  return {
    dateLabel: `${now.getDate()},${MONTHS[now.getMonth()]} ${DAYS[now.getDay()]}`,
  };
}

export default function LiveClock() {
  // Starts as null so the server-rendered and first client-rendered
  // markup match exactly (avoids hydration mismatches), then fills
  // in on mount — same behavior as the original "Loading clock..." state.
  const [now, setNow] = useState(null);

  useEffect(() => {
    setNow(formatNow());
    const interval = setInterval(() => setNow(formatNow()), 10000);
    return () => clearInterval(interval);
  }, []);

  if (!now) {
    return <div className="time-widget">Loading clock...</div>;
  }

  return (
    <div className="time-widget">
      {now.dateLabel} <span className="time">{now.time}</span>
    </div>
  );
}

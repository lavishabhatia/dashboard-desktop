import { useEffect, useState } from "react";

const DateTime = () => {
  const [dateTime, setDateTime] = useState(new Date());

  const formattedDate = dateTime.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formattedTime = dateTime.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (

      <div className="w-screen h-screen fixed top-0 flex flex-col items-center justify-start mt-36">
        <p className="text-5xl text-white/90 font-semibold">{formattedTime}</p>
        <p>{formattedDate}</p>
      </div>

  );
};

export default DateTime;

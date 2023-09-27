import Image from "next/image";
import getCurrentWeather from "@/app/services/weather";
import { useEffect, useState } from "react";

export default function Weather() {
  const [temperature, setTemperature] = useState(0);
  const [condition, setCondition] = useState("");
  const [conditionIcon, setConditionIcon] = useState("");

  useEffect(() => {
    const weatherData = getCurrentWeather();
    weatherData.then((data) => {
      setTemperature(data.current.temp_c);
      setCondition(data.current.condition.text);
      setConditionIcon("http:" + data.current.condition.icon);
    });
  }, []);

  return (
    <section className="w-18">
      <div className="flex flex-col">
        <div className="flex gap-3 item-center">
          <Image
            src={conditionIcon}
            alt="weather"
            width={64}
            height={64}
            className="w-5 h-5"
          />
          <span className="text-sm font-bold">{temperature}°</span>
        </div>
        <div className="flex items-center justify-end gap-1 text-gray-600">
          <span className="text-xs">{condition}</span>
        </div>
      </div>
    </section>
  );
}

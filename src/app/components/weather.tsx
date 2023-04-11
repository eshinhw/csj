import Image from "next/image";
import SunnyIcon from "../../../public/images/weather/sunny.png";

export default function Weather() {
  return (
    <section className="w-18">
      <div className="flex flex-col">
        <div className="flex items-center gap-3">
          <Image src={SunnyIcon} alt="sunny" className="w-3 h-3" />
          <span className="font-bold text-sm">17°C</span>
        </div>
        <div className="flex justify-end gap-1 items-center text-gray-600">
          <span className="text-xs">21°</span>
          <span className="text-xs">9°</span>
        </div>
      </div>
    </section>
  );
}

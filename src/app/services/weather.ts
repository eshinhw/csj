/**
 * Get current weather data from WeatherAPI
 * @returns
 */
export default async function getCurrentWeather() {
  let url =
    "https://api.weatherapi.com/v1" +
    "/current.json?" +
    "key=" +
    process.env.NEXT_PUBLIC_WEATHERAPI +
    "&" +
    "q=Toronto";
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch weather data");
  }
  return res.json();
}

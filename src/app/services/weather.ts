/**
 * Get current weather data from WeatherAPI
 * @returns
 */
export default async function getCurrentWeather() {
  let myURL = new URL("https://api.weatherapi.com/v1/current.json");
  myURL.searchParams.append("key", process.env.NEXT_PUBLIC_WEATHERAPI);
  myURL.searchParams.append("q", "Toronto");
  const res = await fetch(myURL);
  if (!res.ok) {
    throw new Error("Failed to fetch weather data");
  }
  return res.json();
}

export default async function getCurrentWeather() {
  let url =
    "http://api.weatherapi.com/v1" +
    "/current.json?" +
    "key=" +
    process.env.NEXT_PUBLIC_WEATHERAPI +
    "&" +
    "q=Toronto";
  console.log(url);
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch weather data");
  }
  return res.json();
}

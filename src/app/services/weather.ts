export default async function getCurrentWeather() {
  let url =
    "http://api.weatherapi.com/v1" +
    "/current.json?" +
    "key=73a03dc886ea4a7799b170629232409&" +
    "q=Toronto";
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch weather data");
  }
  return res.json();
}

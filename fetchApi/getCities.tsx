type city = { value: 'KER'; label: 'کرمان'; cityName: 'Kerman'; isCity: true };
type cities = city[];

async function getCities(): Promise<cities> {
  const res = await fetch(`https://flightio.com/bff/city/?query=&cache=wb`);
  return res.json();
}

export type { city, cities };
export { getCities };

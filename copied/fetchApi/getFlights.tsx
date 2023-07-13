import { FlightReturnedValue } from '@/app/api/flights/[...catchAll]/route';


async function getFlights(source:string,depart:string,dest:string): Promise<FlightReturnedValue> {
  const res = await fetch(`http://localhost:3000/api/flights/${source}/${depart}/${dest}`);
  return res.json();
}

export { getFlights };

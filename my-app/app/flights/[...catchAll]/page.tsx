import { getFlights } from '@/fetchApi/getFlights';

type params = { params: { catchAll: [string, string, string] } };

async function Flight({ params: { catchAll } }: params) {
  const flights = await getFlights(...catchAll);

  return (
    <div className='max-w-screen-xl mx-40 flex flex-wrap'>
      {flights.map(
        ({
          arrivalTime,
          departTime,
          destnationCityNameFa,
          flightDuration,
          flightNumber,
        }) => (
          <div className='p-24' key={Math.random()}>
            <div>{arrivalTime}</div>
            <div>{departTime}</div>
            <div>{destnationCityNameFa}</div>
            <div>{flightDuration}</div>
            <div>{flightNumber}</div>
          </div>
        )
      )}
    </div>
  );
}
export default Flight;

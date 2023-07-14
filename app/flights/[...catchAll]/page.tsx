import { getFlights } from '@/fetchApi/getFlights';
import Image from 'next/image';

type params = { params: { catchAll: [string, string, string] } };

async function Flight({ params: { catchAll } }: params) {
  const flights = await getFlights(...catchAll);
  return (
    <div className='mx-40 mx-auto flex max-w-screen-xl flex-col gap-14  pt-20 '>
      {flights.map(
        ({
          arrivalTime,
          departTime,
          destnationCityNameFa,
          operatingAirlineNamePersian,
          flightDuration,
          englishName,
          flightNumber,
          image,
          originCityNameFa,
        }) => (
          <div
            className='flex justify-center gap-48 rounded-lg border-[1px]  border-slate-200 p-8'
            key={Math.random()}
          >
            <div className='flex gap-8'>
              <Image src={image} alt='' width={100} height={100} />
              <div className='flex flex-col  justify-around'>
                <div>{operatingAirlineNamePersian}</div>
                <div>{englishName}</div>
              </div>
            </div>
            <div className='flex gap-4'>
              <div className='flex flex-col  justify-around'>
                <div>{arrivalTime}</div>
                <div>{originCityNameFa}</div>
              </div>
              <div className='flex items-center gap-4'>
                <div className='h-[1px] w-8 border-[1px] border-slate-200' />
                <div>{flightDuration}</div>
                <div className='h-[1px] w-8 border-[1px] border-slate-200' />
              </div>
              <div className='flex flex-col  justify-around'>
                <div>{departTime}</div>
                <div>{destnationCityNameFa}</div>
              </div>
            </div>

            <div>{flightNumber}</div>
          </div>
        )
      )}
    </div>
  );
}
export default Flight;

import { NextResponse } from 'next/server';
import { agencies, getRandomInt } from './utils';

type params = { params:{ catchAll: [string, string, string]} };

 type FlightReturnedValue = {originCityNameFa: string;
 destnationCityNameFa: string;
 departTime: string;
 arrivalTime: string;
 operatingAirlineNamePersian: string;
 flightNumber: string;
 flightDuration: string;
 id: string;
}[]

async function GET(request: Request, { params:{catchAll} }: params) {
  return NextResponse.json(
    [...Array(getRandomInt(1, 10))].map((e) => ({
      originCityNameFa: catchAll[0],
      destnationCityNameFa: catchAll[2],
      departTime: '2023-10-16',
      arrivalTime: '2023-10-16',
      operatingAirlineNamePersian: agencies[getRandomInt(0, 3)],
      flightNumber: 'IR468',
      flightDuration: `${getRandomInt(1, 25)}:${getRandomInt(1, 61)}`,
      id: 'e04ce80a-ac41-486a-b6e0-ac5a8f342936',
    }))
  );
}

export type {FlightReturnedValue}
export { GET };

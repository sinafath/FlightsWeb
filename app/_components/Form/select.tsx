'use client';
import * as React from 'react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem as SelecetItemUi,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useFormContext } from 'react-hook-form';
import { cities } from '@/fetchApi/getCities';
import { useParams, useRouter } from 'next/navigation';

type SelectOrigin = {
  cities: cities;
};
function SelectOrigin({ cities }: SelectOrigin) {

  const { control } = useFormContext();
  return (
    <FormField
      control={control}
      name='source'
      render={({ field }) => (
        <FormItem>
          <FormLabel>مبدا</FormLabel>
          <div className='relative'>
            <Select  onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger className='w-[180px] bg-background'>
                <SelectValue placeholder='انتخاب مبدا' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>شهر ها</SelectLabel>
                  {cities.map((city) => (
                    <SelecetItemUi value={city.value} key={city.value}>
                      {city.label}
                    </SelecetItemUi>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <FormMessage />
          </div>
        </FormItem>
      )}
    />
  );
}

function SelectDestination({ cities }: SelectOrigin) {
  const { control } = useFormContext();
  return (
    <FormField
      control={control}
      name='dest'
      render={({ field }) => (
        <FormItem>
          <FormLabel>مقصد</FormLabel>
          <div className='relative'>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger className='w-[180px] bg-background'>
                <SelectValue placeholder='انتخاب مقصد' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>شهر ها</SelectLabel>
                  {cities.map((city) => (
                    <SelecetItemUi value={city.value} key={city.value}>
                      {city.label}
                    </SelecetItemUi>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <FormMessage />
          </div>
        </FormItem>
      )}
    />
  );
}
export { SelectOrigin, SelectDestination };

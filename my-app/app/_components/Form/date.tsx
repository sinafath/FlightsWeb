'use client';
import CalendarIcon from '@/app/_styles/CalenderIcon';
import PopoverContentStyled from '@/app/_styles/PopoverContentStyled';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Popover, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { useFormContext } from 'react-hook-form';
import { format } from 'date-fns';

function Date() {
  const { control } = useFormContext();
  return (
    <FormField
      control={control}
      name='depart'
      render={({ field }) => (
        <FormItem>
          <FormLabel>تاریخ</FormLabel>
          <div className='relative'>
            <Popover>
              <PopoverTrigger asChild>
                <FormControl>
                  <Button
                    variant={'outline'}
                    className={cn(
                      'w-[240px] pl-3 text-left font-normal',
                      !field.value && 'text-muted-foreground'
                    )}
                  >
                    {field.value ? (
                      format(field.value, 'PPP')
                    ) : (
                      <span>تاریخ انتخاب کنید</span>
                    )}
                    <CalendarIcon />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContentStyled>
                <Calendar
                  mode='single'
                  selected={field.value}
                  onSelect={field.onChange}
                  disabled={(date) =>
                    date > new (Date as any)() || date < new (Date as any)('1900-01-01')
                  }
                  initialFocus
                />
              </PopoverContentStyled>
            </Popover>

            <FormMessage />
          </div>
        </FormItem>
      )}
    />
  );
}
export default Date;

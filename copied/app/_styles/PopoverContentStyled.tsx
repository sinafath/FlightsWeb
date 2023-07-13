import { PopoverContent } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { ComponentProps } from 'react';

function PopoverContentStyled({
  className,
  ...props
}: ComponentProps<typeof PopoverContent>) {
  return (
    <PopoverContent
      className={cn('w-auto p-0', className)}
      align='start'
      {...props}
    />
  );
}

export default PopoverContentStyled;

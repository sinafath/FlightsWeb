import { cn } from '@/lib/utils';
import { CalendarIcon as Icon, LucideProps } from 'lucide-react';

function CalendarIcon({ className, ...props }: LucideProps) {
  return (
    <Icon className={cn('ms-auto h-4 w-4 opacity-50', className)} {...props} />
  );
}

export default CalendarIcon;

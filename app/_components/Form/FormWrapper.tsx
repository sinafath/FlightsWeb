'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form as FormProvider } from '@/components/ui/form';
import FormSchema from './FormSchema';
import { z } from 'zod';
import { ReactNode } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { format, parseISO, toDate } from 'date-fns';

type FormWrapper = {
  children: ReactNode;
};

function FormWrapper({ children }: FormWrapper) {
  const paarams = useParams();
  console.log(paarams);

  const [source = undefined, depart = undefined, dest = undefined] =
    paarams?.catchAll?.split('/') ?? [];

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      source,
      dest,
      depart: depart ? parseISO(depart) : undefined,
    },
  });
  const route = useRouter();
  function onSubmit({ source, dest, depart }: z.infer<typeof FormSchema>) {
    route.push(`/flights/${source}/${format(depart, 'yyyy-MM-dd')}/${dest}`);
  }

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='w mx-auto flex h-auto w-[100%] flex-col justify-center gap-4 rounded-lg bg-gray-50 py-16 pr-10  md:mt-24 md:h-12 md:max-w-screen-xl md:flex-row md:items-center md:gap-16 md:py-20 md:pr-0'
      >
        {children}
      </form>
    </FormProvider>
  );
}

export default FormWrapper;

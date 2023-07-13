import { z } from 'zod';

const FormSchema = z.object({
  depart: z.date({
    required_error: 'تاریخ الزامی است',
  }),
  dest: z.string({
    required_error: 'مفصد الزامی است',
  }),
  source: z.string({
    required_error: 'مبدا الزامی است',
  }),
});

export default FormSchema;

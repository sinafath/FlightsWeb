import { Button } from '@/components/ui/button';

import { SelectDestination, SelectOrigin } from './select';
import Date from './date';
import FormWrapper from './FormWrapper';
import { getCities } from '@/fetchApi/getCities';

async function Form() {
  const cities = await getCities();
  
  return (
    <FormWrapper>
      <SelectOrigin cities={cities} />
      <SelectDestination cities={cities} />
      <Date />
      <Button className='h-8 w-16' type='submit'>
        ارسال
      </Button>
    </FormWrapper>
  );
}
export default Form;

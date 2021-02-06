import { ChangeEvent, useState } from 'react';

type IUseValue = [string, (event: ChangeEvent<HTMLInputElement>) => void];

const useValue = (initialValue = ''): IUseValue => {
  const [value, setValue] = useState(initialValue);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  }

  return [value, handleOnChange];
}

export default useValue;

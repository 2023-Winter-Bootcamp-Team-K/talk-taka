import { useState, ChangeEvent } from 'react';

export const useInput = (initialValue: string) => {
  const [input, setInput] = useState<string>(initialValue);

  const handleChange = (
    e: ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLInputElement>
  ) => {
    setInput(e.target.value);
  };

return [input, handleChange] as const;  
};

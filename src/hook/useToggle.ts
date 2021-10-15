import { useState } from 'react';

function useToggle(initialValue: boolean): [boolean, () => void] {
  const [value, setValue] = useState(initialValue);

  
}

// eslint-disable-next-line
export { useToggle };

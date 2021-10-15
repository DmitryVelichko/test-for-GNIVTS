import { useState, useEffect } from 'react';

function useLocalStorage<T>(
  key: string,
  initialValue: T,
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const getValue = () => {
    
}

 
// eslint-disable-next-line
export { useLocalStorage };

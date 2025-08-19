import { useState } from 'react';

let adminInstance = null;

export const useAdmin = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [pinEntered, setPinEntered] = useState(false);

  const toggleAdmin = (pin) => {
    if (pin === '1234') {
      setIsAdmin(prev => !prev);
      setPinEntered(true);
    } else {
      alert('❌ Wrong PIN! Try 1234');
    }
  };

  return { isAdmin, pinEntered, toggleAdmin };
};

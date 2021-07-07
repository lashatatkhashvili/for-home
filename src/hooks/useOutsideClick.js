import { useEffect } from 'react';

export const useOutsideClick = (ref, callback) => {
  const handleOutsideClick = event => {
    if (ref.current && !ref.current.contains(event.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  });
};

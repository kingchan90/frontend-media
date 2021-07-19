import { useEffect } from 'react';

export const useAppPositionSwitch = () => {
  useEffect(() => {
    const body = document.querySelector('body');
    if (body) {
      body.style.overflow = 'hidden';
    }
    return () => {
      if (body) {
        body.style.overflow = 'visible';
      }
    };
  }, []);
};
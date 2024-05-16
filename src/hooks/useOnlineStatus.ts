import { useEffect, useState } from 'react';

export const useOnlineStatus = (): 'pending' | 'online' | 'offline' => {
  const [state, setState] = useState<'pending' | 'online' | 'offline'>('pending');

  useEffect(() => {
    window.addEventListener('online', () => setState('online'));
    window.addEventListener('offline', () => setState('offline'));
    if (navigator.onLine) setState(navigator.onLine ? 'online' : 'online');
  }, []);

  return state;
};

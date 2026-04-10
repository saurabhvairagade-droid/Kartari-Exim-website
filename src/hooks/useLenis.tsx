import { useEffect } from 'react';
import { ReactLenis, useLenis } from 'lenis/react';

interface LenisProviderProps {
  children: React.ReactNode;
}

export const LenisProvider = ({ children }: LenisProviderProps) => {
  return (
    <ReactLenis root>
      {children}
    </ReactLenis>
  );
};

export const useLenisScroll = useLenis;

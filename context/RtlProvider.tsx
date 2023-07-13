'use client';
import { DirectionProvider } from '@radix-ui/react-direction';
import { ReactNode } from 'react';

type RtlProvider = {
  children: ReactNode;
};

function RtlProvider({ children }: RtlProvider) {
  return <DirectionProvider dir='rtl'>{children}</DirectionProvider>;
}
export default RtlProvider;

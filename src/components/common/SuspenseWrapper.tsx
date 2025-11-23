import { Suspense, type ReactNode } from 'react';
import Loading from './Loading';

interface SuspenseWrapperProps {
  children: ReactNode;
  fallbackMessage?: string;
}

export default function SuspenseWrapper({
  children,
  fallbackMessage = 'Carregando...',
}: SuspenseWrapperProps) {
  return (
    <Suspense fallback={<Loading message={fallbackMessage} size="large" />}>{children}</Suspense>
  );
}

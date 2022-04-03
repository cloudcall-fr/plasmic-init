import React, { ReactNode } from 'react';

export interface HelloWorldProps {
  className?: string;
}

export function HelloWorld({ className }: HelloWorldProps) {
  return (
    <div className={className} style={{ padding: '20px' }}>
      <p>Hello there! </p>
    </div>
  );
}

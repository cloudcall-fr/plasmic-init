import React, { ReactNode } from 'react';

export interface HelloWorldProps {
  className?: string;
  msg?: string;
}

export function HelloWorld({ className, msg }: HelloWorldProps) {
  return (
    <div className={className} style={{ padding: '20px' }}>
      <p>{msg ? "Hello there!" : msg}</p>
    </div>
  );
}

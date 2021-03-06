import React from 'react';

import { Navigation } from '../Navigation';

interface Props {
  children: React.ReactNode;
}

export const Layout = (props: Props) => {
  return (
    <div className="min-h-screen bg-gray-200">
      <Navigation />
      <div className="py-8 px-4">{props.children}</div>
    </div>
  );
};

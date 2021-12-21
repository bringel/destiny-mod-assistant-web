import Link from 'next/link';
import React from 'react';

interface Props {}

export const Navigation = (props: Props) => {
  return (
    <nav className="bg-gray-700 flex-0 basis-80 pt-8 pl-8 pr-4">
      <h1 className="text-white font-bold text-xl">Destiny Mod Assistant</h1>
      <div className="h-20" />
      <ul className="text-white font-semibold text-lg">
        <li>
          <Link href="/current-equipment">Current Equipment</Link>
        </li>
        <div className="h-2" />
        <li>
          <Link href="builds">Builds</Link>
        </li>
        <div className="h-2" />
        <li>
          <Link href="mods">Armor Mods</Link>
        </li>
      </ul>
    </nav>
  );
};

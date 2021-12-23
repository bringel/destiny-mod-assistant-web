import Link from 'next/link';
import React from 'react';

import { useUserContext } from '../context/UserContext';

interface Props {}

export const Navigation = (props: Props) => {
  const { currentUser, isLoading } = useUserContext();

  const disable = currentUser === null && !isLoading;

  return (
    <nav className="bg-gray-700 flex-0 basis-80 pt-8 pl-8 pr-4">
      <h1 className="text-white font-bold text-xl">Destiny Mod Assistant</h1>
      <div className="h-20" />
      <ul className="text-white font-semibold text-lg">
        <li>
          <Link href="/current-equipment">
            <a className={disable ? 'text-gray-500 pointer-events-none' : undefined}>Current Equipment</a>
          </Link>
        </li>
        <div className="h-2" />
        <li>
          <Link href="builds">
            <a className={disable ? 'text-gray-500 pointer-events-none' : undefined}>Builds</a>
          </Link>
        </li>
        <div className="h-2" />
        <li>
          <Link href="mods">
            <a className={disable ? 'text-gray-500 pointer-events-none' : undefined}>Armor Mods</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

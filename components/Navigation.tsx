import Link from 'next/link';
import React from 'react';

import { useUserContext } from '../context/UserContext';

interface Props {}

export const Navigation = (props: Props) => {
  const { currentUser, isLoading } = useUserContext();

  const disable = currentUser === null && !isLoading;

  return (
    <nav className="bg-indigo-800 flex h-14 shadow-black shadow-sm items-center px-4">
      <h1 className="text-white font-bold text-xl">Destiny Mod Assistant</h1>
      <div className="w-6" />
      <ul className="text-white font-semibold text-lg flex">
        <li className="px-4">
          <Link href="/current-equipment">
            <a className={disable ? 'text-gray-400 pointer-events-none' : undefined}>Current Equipment</a>
          </Link>
        </li>

        <li className="px-4">
          <Link href="builds">
            <a className={disable ? 'text-gray-400 pointer-events-none' : undefined}>Builds</a>
          </Link>
        </li>
        <li className="px-4">
          <Link href="mods">
            <a className={disable ? 'text-gray-400 pointer-events-none' : undefined}>Armor Mods</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

import { compareDesc, parseISO } from 'date-fns';
import Link from 'next/link';
import React from 'react';

import { CharacterCard } from '../components/CharacterCard';
import { useCharactersQuery } from '../data-fetching/useCharactersQuery';
import { useAuthRedirect } from '../useAuthRedirect';

interface Props {}

const Index = (props: Props) => {
  useAuthRedirect();

  const { data, isLoading } = useCharactersQuery();

  data?.sort((a, b) => {
    return compareDesc(parseISO(a.dateLastPlayed), parseISO(b.dateLastPlayed));
  });

  return (
    <div className="flex gap-x-3 ml-20">
      <div className="flex-none">
        {!isLoading && data !== undefined ? (
          <div className="space-y-2">
            {data.map((character) => (
              <Link key={character.characterID} href={`/current-equipment/${character.characterID}`}>
                <a className="block">
                  <CharacterCard character={character} />
                </a>
              </Link>
            ))}
          </div>
        ) : (
          <div className="bg-gray-300 animate-pulse w-[474px] h-[96px]" />
        )}
      </div>
      <span className="text-lg ">Select a character to view their currently equipped armor and mods</span>
    </div>
  );
};

export default Index;

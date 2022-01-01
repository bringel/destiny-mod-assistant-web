import React, { useEffect } from 'react';

import { CharactersList } from '../components/CharactersList';
import { useCharactersQuery } from '../data-fetching/useCharactersQuery';
import { useAuthRedirect } from '../useAuthRedirect';

interface Props {}

const Index = (props: Props) => {
  useAuthRedirect();

  const { data, isLoading } = useCharactersQuery();

  return (
    <div className="flex flex-col gap-y-3 ml-20">
      <span className="text-lg">Select a character to view their currently equipped armor and mods</span>
      <div>{!isLoading && data !== undefined ? <CharactersList characters={data} /> : 'Loading...'}</div>
    </div>
  );
};

export default Index;

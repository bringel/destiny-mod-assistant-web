import React, { useEffect } from 'react';

import { CharactersList } from '../components/CharactersList';
import { useCharactersQuery } from '../data-fetching/useCharactersQuery';
import { useAuthRedirect } from '../useAuthRedirect';

interface Props {}

const Index = (props: Props) => {
  useAuthRedirect();

  const { data, isLoading } = useCharactersQuery();

  return <div>{isLoading ? 'Loading...' : <CharactersList characters={data} />}</div>;
};

export default Index;

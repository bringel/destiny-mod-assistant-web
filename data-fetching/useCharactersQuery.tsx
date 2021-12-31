import { useQuery } from 'react-query';

import { Character } from './types';

export const useCharactersQuery = () => {
  return useQuery<Array<Character>>('allCharacters', async () => {
    let res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/characters`, { credentials: 'include' });
    if (!res.ok) {
      throw new Error('Network error');
    } else {
      return res.json();
    }
  });
};

import { useQuery } from 'react-query';

import spot from './spot';
import { Character } from './types';

export const useCharactersQuery = () => {
  return useQuery<Array<Character>>('allCharacters', async () => {
    return await spot.get('/characters');
  });
};

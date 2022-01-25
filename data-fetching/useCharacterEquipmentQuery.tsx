import { useQuery } from 'react-query';

import spot from './spot';
import { ArmorPiece, Character } from './types';

export const useCharacterEquipmentQuery = (characterID: string | undefined) => {
  return useQuery<{ character: Character; armor: Array<ArmorPiece> }>(['character', characterID], async () => {
    if (characterID === undefined) {
      throw new Error('No character ID provided to useCharacterEquipmentQuery');
    }

    return await spot.get(`/characters/${characterID}`);
  });
};

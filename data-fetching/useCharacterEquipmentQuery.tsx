import { useQuery } from 'react-query';

import { ArmorPiece, Character } from './types';

export const useCharacterEquipmentQuery = (characterID: string | undefined) => {
  return useQuery<{ character: Character; armor: Array<ArmorPiece> }>(['character', characterID], async () => {
    if (characterID === undefined) {
      throw new Error('No character ID provided to useCharacterEquipmentQuery');
    }

    let res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/characters/${characterID}`, { credentials: 'include' });

    if (!res.ok) {
      throw new Error('Network error');
    } else {
      return res.json();
    }
  });
};

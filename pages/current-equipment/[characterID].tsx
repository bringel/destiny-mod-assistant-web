import { useRouter } from 'next/router';
import React from 'react';

import { ArmorRow } from '../../components/ArmorRow';
import { CharacterCard } from '../../components/CharacterCard';
import { ArmorType } from '../../data-fetching/types';
import { useCharacterEquipmentQuery } from '../../data-fetching/useCharacterEquipmentQuery';

interface Props {}

const CharacterCurrentEquipment = (props: Props) => {
  const router = useRouter();

  const { characterID } = router.query as { characterID: string };

  const { data } = useCharacterEquipmentQuery(characterID);
  if (data === undefined) {
    return null;
  }

  data.armor.sort((a, b) => a.itemType - b.itemType);

  return (
    <div className="space-y-4">
      <CharacterCard character={data?.character} />
      <div className="space-y-2 divide-y divide-gray-400">
        {data.armor.map((a) => (
          <ArmorRow key={a.itemInstanceID} armor={a} />
        ))}
      </div>
    </div>
  );
};

export default CharacterCurrentEquipment;

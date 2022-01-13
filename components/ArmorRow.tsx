import React from 'react';

import { ArmorPiece, ArmorType } from '../data-fetching/types';

interface Props {
  armor: ArmorPiece;
}

export const ArmorRow = (props: Props) => {
  return (
    <div className="px-3 py-1 ">
      <div>{props.armor.name}</div>
      <img src={props.armor.iconPath} className="h-[72px] w-[72px]" />
    </div>
  );
};

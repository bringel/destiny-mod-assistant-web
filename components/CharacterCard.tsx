/* eslint-disable @next/next/no-img-element */
import React from 'react';

import { Character } from '../data-fetching/types';

interface Props {
  character: Character;
}

export const CharacterCard = (props: Props) => {
  return (
    <div className="relative">
      <img src={props.character.emblemBackgroundPath} alt="" height={96} width={474} />
      <div className="absolute left-24 top-2 text-white text-xl flex flex-col">
        <div>
          {props.character.characterClass} &mdash;{' '}
          <span className="text-lg">{props.character.genderAndRaceDescription}</span>
        </div>
        <div className="text-lightLevel">{props.character.light}</div>
      </div>
    </div>
  );
};

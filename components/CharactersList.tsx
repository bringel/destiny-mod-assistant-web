import Image from 'next/image';
import React from 'react';

import { Character } from '../data-fetching/types';

interface Props {
  characters: Array<Character>;
}

export const CharactersList = (props: Props) => {
  return (
    <>
      {props.characters.map((character) => {
        return (
          <div key={character.characterID} className="relative">
            <img src={`https://bungie.net${character.emblemBackgroundPath}`} />
            <div className="absolute left-24 top-1 text-white">{character.class}</div>
          </div>
        );
      })}
    </>
  );
};

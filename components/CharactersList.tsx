import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Character } from '../data-fetching/types';

interface Props {
  characters: Array<Character>;
}

export const CharactersList = (props: Props) => {
  return (
    <div className="space-y-2">
      {props.characters.map((character) => {
        return (
          <Link key={character.characterID} href={`/current-equipment/${character.characterID}`}>
            <a className="relative block">
              <img src={`https://bungie.net${character.emblemBackgroundPath}`} alt="" />
              <div className="absolute left-24 top-2 text-white text-xl flex flex-col">
                <div>
                  {character.class} - <span className="text-lg">{character.genderAndRaceDescription}</span>
                </div>
                <div className="text-lightLevel">{character.light}</div>
              </div>
            </a>
          </Link>
        );
      })}
    </div>
  );
};

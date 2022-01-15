/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import { ArmorPiece, ArmorType, EnergyType } from '../data-fetching/types';
import ElementArc from '../public/element_arc.svg';
import ElementSolar from '../public/element_solar.svg';
import ElementStasis from '../public/element_stasis.svg';
import ElementVoid from '../public/element_void.svg';

interface Props {
  armor: ArmorPiece;
}

export const ArmorRow = (props: Props) => {
  return (
    <div className="px-3 py-1 ">
      <div>{props.armor.name}</div>
      <div className="flex items-center space-x-2">
        <img
          src={props.armor.iconPath}
          className={clsx('h-[72px]', 'w-[72px]', 'border-2', {
            'border-energy-arc': props.armor.energyType === EnergyType.Arc,
            'border-energy-solar': props.armor.energyType === EnergyType.Solar,
            'border-energy-void': props.armor.energyType === EnergyType.Void,
            'border-energy-stasis': props.armor.energyType === EnergyType.Stasis
          })}
          alt=""
        />
        {props.armor.energyType === EnergyType.Arc ? (
          <ElementArc className="fill-energy-arc" />
        ) : props.armor.energyType === EnergyType.Solar ? (
          <ElementSolar className="fill-energy-solar" />
        ) : props.armor.energyType === EnergyType.Void ? (
          <ElementVoid className="fill-energy-void" />
        ) : (
          <ElementStasis className="fill-energy-stasis" />
        )}
        <span
          className={clsx('text-lg', 'font-bold', {
            'text-energy-arc': props.armor.energyType === EnergyType.Arc,
            'text-energy-solar': props.armor.energyType === EnergyType.Solar,
            'text-energy-void': props.armor.energyType === EnergyType.Void,
            'text-energy-stasis': props.armor.energyType === EnergyType.Stasis
          })}>
          {props.armor.energyCapacity}
        </span>
      </div>
    </div>
  );
};

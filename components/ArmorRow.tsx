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
      <div className="grid grid-cols-6 items-start auto-rows-max">
        <div className="flex items-center col-start-1 row-start-1">
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
        <div className="col-start-1 row-start-2 row-span-2" />
        {props.armor.modSlots.map((socket, index) => {
          return (
            <React.Fragment key={index}>
              <img
                src={socket.currentPlug !== null ? socket.currentPlug.iconPath : socket.iconPath}
                className="bg-gray-900 h-[72px] w-[72px] row-start-1"
                alt=""
              />

              <span className="text-sm text-gray-700 row-start-2">
                {socket.currentPlug !== null ? socket.currentPlug.displayName : 'Empty'}
              </span>
              <span className="text-xs text-gray-500 row-start-3">{socket.displayName}</span>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

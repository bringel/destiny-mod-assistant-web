export type User = {
  destinyMembershipType: number;
  destinyMembershipID: number;
  displayName: string;
};

export type Character = {
  characterID: string;
  characterClass: string;
  genderAndRaceDescription: string;
  dateLastPlayed: string;
  light: number;
  emblemBackgroundPath: string;
};

export enum ArmorType {
  Helmet = 1,
  Arms,
  Chest,
  Legs,
  ClassItem
}

export enum EnergyType {
  Arc = 1,
  Solar = 2,
  Void = 3,
  Stasis = 6
}

export type CurrentSocketPlug = {
  plugHash: string;
  displayName: string;
  iconPath: string;
};

export type ArmorPiece = {
  itemHash: number;
  itemInstanceID: number;
  itemType: ArmorType;
  bucketHash: number;
  name: string;
  iconPath: string;
  energyType: EnergyType;
  energyCapacity: number;
  energyUsed: number;
  modSlots: Array<{
    socketItemTypeHash: string;
    displayName: string;
    iconPath: string;
    plugSetHash: string;
    currentPlug: CurrentSocketPlug | null;
  }>;
};

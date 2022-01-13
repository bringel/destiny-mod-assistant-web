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

export type ArmorPiece = {
  itemHash: number;
  itemInstanceID: number;
  itemType: ArmorType;
  bucketHash: number;
  name: string;
  iconPath: string;
};

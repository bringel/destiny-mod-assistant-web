export type User = {
  destinyMembershipType: number;
  destinyMembershipID: number;
  displayName: string;
};

export type Character = {
  characterID: string;
  class: string;
  genderAndRaceDescription: string;
  dateLastPlayed: string;
  light: number;
  emblemBackgroundPath: string;
};

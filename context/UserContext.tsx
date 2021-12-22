import React, { useContext } from 'react';

import { useUserQuery } from '../data-fetching/useUserQuery';

type User = {
  destinyMembershipType: number;
  destinyMembershipID: number;
  displayName: string;
};

interface UserContextType {
  currentUser: User | null;
}

export const UserContext = React.createContext<UserContextType | null>(null);

export const useUserContext = () => {
  let contextValue = useContext(UserContext);

  if (contextValue === null) {
    throw new Error('Wrap useUserContext in a UserContext.Provider');
  }

  return contextValue;
};

export const UserProvider = (props: { children: React.ReactNode }) => {
  const { data } = useUserQuery();

  return <UserContext.Provider value={{ currentUser: data }}>{props.children}</UserContext.Provider>;
};

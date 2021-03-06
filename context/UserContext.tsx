import React, { useContext } from 'react';

import { useUserQuery } from '../data-fetching/useUserQuery';

type User = {
  destinyMembershipType: number;
  destinyMembershipID: number;
  displayName: string;
};

interface UserContextType {
  currentUser: User | null | undefined;
  isLoading: boolean;
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
  const { data, isLoading } = useUserQuery();

  return (
    <UserContext.Provider value={{ currentUser: data, isLoading: isLoading }}>{props.children}</UserContext.Provider>
  );
};

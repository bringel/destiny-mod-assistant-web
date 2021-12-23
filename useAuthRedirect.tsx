import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useUserContext } from './context/UserContext';

export const useAuthRedirect = () => {
  const { currentUser, isLoading } = useUserContext();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && currentUser === null) {
      router.push('/login');
    }
  }, [currentUser, isLoading, router]);
};

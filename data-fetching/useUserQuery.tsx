import { useQuery } from 'react-query';

export const useUserQuery = () => {
  return useQuery('user', async () => {
    let res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user`, { credentials: 'include' });
    if (!res.ok) {
      throw new Error('Network error');
    } else return res.json();
  });
};

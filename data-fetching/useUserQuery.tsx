import { useQuery } from 'react-query';

export const useUserQuery = () => {
  return useQuery('user', async () => {
    let res = await fetch(`${process.env.API_URL}/user`);
    if (!res.ok) {
      throw new Error('Network error');
    } else return res.json();
  });
};

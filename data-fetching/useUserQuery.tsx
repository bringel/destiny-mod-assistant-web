import { useQuery } from 'react-query';

import spot from './spot';
import { User } from './types';

export const useUserQuery = () => {
  return useQuery<User>('user', async () => {
    return await spot.get('/user');
  });
};

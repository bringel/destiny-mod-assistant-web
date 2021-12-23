import React, { useEffect } from 'react';

import { useAuthRedirect } from '../useAuthRedirect';

interface Props {}

const Index = (props: Props) => {
  useAuthRedirect();

  return <div />;
};

export default Index;

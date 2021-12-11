import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

interface Props {
}

const Index = (props: Props) => {
  const router = useRouter();

  useEffect(() => {
    router.push('/login')
  }, [router])
  
  return null;
};

export default Index;
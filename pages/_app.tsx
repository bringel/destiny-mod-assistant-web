import '../styles/globals.css';

import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';

import { Layout } from '../components/layouts/layout';
import { UserProvider } from '../context/UserContext';
import spot from '../data-fetching/spot';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  spot.setBaseURL(process.env.NEXT_PUBLIC_API_URL ?? '');

  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserProvider>
    </QueryClientProvider>
  );
}

export default MyApp;

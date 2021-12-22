import '../styles/globals.css';

import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';

import { Layout } from '../components/layouts/layout';
import { UserProvider } from '../context/UserContext';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
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

import { RouterProvider } from 'react-router-dom';
import router from './router';
import { GlobalStyle } from './styles/GlobalStyle';
import { CookiesProvider } from 'react-cookie';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <CookiesProvider>
          <GlobalStyle />
          <RouterProvider router={router} />
        </CookiesProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
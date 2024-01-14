import { RouterProvider } from 'react-router-dom';
import router from './router';
import { GlobalStyle } from './styles/GlobalStyle';
import { CookiesProvider } from 'react-cookie';

function App() {
  return (
    <>
      <CookiesProvider>
        <GlobalStyle />
        <RouterProvider router={router} />
      </CookiesProvider>
    </>
  );
}

export default App;

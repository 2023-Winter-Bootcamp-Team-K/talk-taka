import { RouterProvider } from 'react-router-dom';
import router from './router';
import { GlobalStyle } from './styles/GlobalStyle';

function App() {
  return (
    <>
      {/* <RouterProvider router={router} /> */}
      <GlobalStyle />
    </>
  );
}

export default App;

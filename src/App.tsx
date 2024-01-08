import { RouterProvider } from 'react-router-dom';
import router from './router';
import Modal from './components/modal/Modal';
import { GlobalStyle } from './styles/GlobalStyle';

function App() {
  return (
    <>
      {/* <RouterProvider router={router} /> */}
      <GlobalStyle />
      <Modal />
      
    </>
  );
}

export default App;

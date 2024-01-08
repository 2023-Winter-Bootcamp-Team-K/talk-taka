import { RouterProvider } from 'react-router-dom';
import router from './router';
import Modal from './components/modal/Modal';
import { GlobalStyle } from './styles/GlobalStyle';
import MyMessage from './components/common/MyMessage';
import OpponentMessage from './components/common/OpponentMessage';

function App() {
  return (
    <div>
      <OpponentMessage chatMessage="상대" />
      <MyMessage chatMessage="내 메시지 내용 . ... .... .. .... .... ........ .... ..... ..... .... ..... . ...... ... ..... ...... .... ... .. . .. .. ......" />
    </div>
  );
}

export default App;

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
      <MyMessage chatMessage="내 메시지를 보내는 부분입니다. 칸 크기 확인용 입니다~~ 오른쪽 패딩 값을 확인합시다. " />
    </div>
  );
}

export default App;

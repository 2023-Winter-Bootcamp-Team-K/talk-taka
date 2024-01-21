import { create, StateCreator } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';

type ChatStore = {
  RecordToggle: boolean;
  isShowChar: boolean;
  audio: string;
  sendAudio: boolean;
  // socketConnected: boolean;
  // socket: WebSocket;

  setIsShowChar: (isShowChar: any) => void;
  setRecordToggle: (RecordToggle: any) => void;
  setAudio: (audio: any) => void;
  setSendAudio: (sendAudio: any) => void;
  // setSocketConnected: (socketConnected: any) => void;
  // setSocket: (socket: WebSocket) => void;
};
// type UserPersist = (
//   config: StateCreator<ChatStore>,
//   options: PersistOptions<ChatStore>
// ) => StateCreator<ChatStore>;

export const useChatStore = create<ChatStore>(
  // (persist as UserPersist)(
  (set) => ({
    RecordToggle: false,
    isShowChar: false,
    audio: 'none',
    sendAudio: false,
    // socketConnected: false,
    // socket: new WebSocket(''),
    setRecordToggle: (RecordToggle) => set({ RecordToggle: RecordToggle }),
    setIsShowChar: (isShowChar) => set({ isShowChar: isShowChar }),
    setAudio: (audio) => set({ audio: audio }),
    setSendAudio: (sendAudio) => set({ sendAudio: sendAudio }),
    // setSocketConnected: (socketConnected) =>
    //   set({ socketConnected: socketConnected }),
    // setSocket: (socket) => set({ socket: socket }),
  })
  // {
  //   name: 'chat-StoreName',
  // }
  // )
);

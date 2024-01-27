import { create, StateCreator } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';

type ChatStore = {
  RecordToggle: boolean;
  isShowChar: boolean;
  audio: string;
  sendAudio: boolean;
  plzWait: boolean;
  exitChat: boolean;

  setIsShowChar: (isShowChar: any) => void;
  setRecordToggle: (RecordToggle: any) => void;
  setAudio: (audio: any) => void;
  setSendAudio: (sendAudio: any) => void;
  setPlzWait: (plzWait: any) => void;
  setExitChat: (exitChat: any) => void;
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
    plzWait: false,
    exitChat: true,

    setRecordToggle: (RecordToggle) => set({ RecordToggle: RecordToggle }),
    setIsShowChar: (isShowChar) => set({ isShowChar: isShowChar }),
    setAudio: (audio) => set({ audio: audio }),
    setSendAudio: (sendAudio) => set({ sendAudio: sendAudio }),
    setPlzWait: (plzWait) => set({ plzWait: plzWait }),
    setExitChat: (exitChat) => set({ exitChat: exitChat }),
  })
  //   {
  //     name: 'chat-StoreName',
  //   }
  // )
);

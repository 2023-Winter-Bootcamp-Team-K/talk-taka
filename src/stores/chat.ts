import create from 'zustand';

type ChatStore = {
  socket: WebSocket | null;
  socketConnected: boolean;
  close: boolean;
  setSocket: (socket: WebSocket | null) => void;
  setSocketConnected: (value: boolean) => void;
  setClose: (value: boolean) => void;
};

export const useChatStore = create<ChatStore>((set) => ({
  socket: null,
  socketConnected: false,
  close: false,
  setSocket: (socket) => set({ socket }),
  setSocketConnected: (value) => set({ socketConnected: value }),
  setClose: (value) => set({ close: value }),
}));

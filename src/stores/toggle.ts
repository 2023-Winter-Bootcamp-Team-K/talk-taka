import { create, StateCreator } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';

type toggleStore = {
  toggle: boolean;
  setToggle: (toggle: any) => void;
};
type UserPersist = (
  config: StateCreator<toggleStore>,
  options: PersistOptions<toggleStore>
) => StateCreator<toggleStore>;

export const toggleStore = create<toggleStore>(
  (persist as UserPersist)(
    (set) => ({
      toggle: false, //상태
      setToggle: (toggle) => set({ toggle: toggle }), //상태변경
    }),
    {
      name: 'toggle-StoreName',
    }
  )
);

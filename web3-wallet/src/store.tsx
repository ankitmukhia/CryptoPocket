import { create } from 'zustand'

interface State {
  mnemonicKeys: string;
  walletKeys: string[];
}

interface Action {
  addMnemonicKeys: (data: State["mnemonicKeys"]) => void;
  addWalletKeys: (data: any) => void;
}

export const useStore = create<State & Action>((set) => ({
  mnemonicKeys: "",
  walletKeys: [],
  addMnemonicKeys: (data) => {
    set((state) => ({
      ...state, mnemonicKeys: data
    }))
  },
  addWalletKeys: (data) => {
    set((state) => ({
      walletKeys: [...state.walletKeys, data]
    }))
  },
}))

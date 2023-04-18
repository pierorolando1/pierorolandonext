import { atom } from "recoil"
import type { MessageProps } from "../components/message"

type AlfredState = {
  isOpen: boolean
  isAnswering: boolean
  isFirstTime: boolean
}

export const alfredState = atom<AlfredState>({ 
  key: 'alfredStateAtom',
  default: {
    isOpen: true,
    isAnswering: true,
    isFirstTime: true
  }
})

export const messagesState = atom<MessageProps[]>({
  key: 'messagesStateAtom',
  default: []
})

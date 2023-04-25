import { atom } from "recoil"
import type { MessageType } from "@/features/messages/types"

type AlfredState = {
  isOpen: boolean
  isAnswering: boolean
  isFirstTime: boolean
}

export const alfredState = atom<AlfredState>({ 
  key: 'alfredStateAtom',
  default: {
    isOpen: false,
    isAnswering: true,
    isFirstTime: true
  }
})

export const messagesState = atom<MessageType[]>({
  key: 'messagesStateAtom',
  default: []
})

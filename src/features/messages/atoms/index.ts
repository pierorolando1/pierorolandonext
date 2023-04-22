import { atom } from "recoil"

export const lastMessageState = atom<string>({ 
  key: 'lastMessageState',
  default: ""
})


export const api = process.env.OPENAI_API_KEY 

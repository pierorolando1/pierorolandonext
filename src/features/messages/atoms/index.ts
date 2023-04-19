import { ChatGPTAPI } from "chatgpt"
import { atom } from "recoil"

export const lastMessageState = atom<string>({ 
  key: 'lastMessageState',
  default: ""
})


export const api = new ChatGPTAPI({ apiKey: process.env.OPENAI_API_KEY || "" })

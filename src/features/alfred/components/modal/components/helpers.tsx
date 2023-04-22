import { motion } from "framer-motion"
import { alfredState, messagesState } from "@/features/alfred/atoms"
import { useRecoilState, useSetRecoilState } from "recoil"
import { useState } from "react"
import { scrollToBottom } from ".."
import { OpenAIExt } from "openai-ext"
import { lastMessageState } from "@/features/messages/atoms"
import { PROMPT } from "@/consts"

export const ExitButton = () => {
  const setAlfredState = useSetRecoilState(alfredState)

  return (
    <motion.button
      onClick={() => setAlfredState(state => ({ ...state, isOpen: false })) }

      className="absolute top-0 right-0 m-4 p-4 hover:bg-gray-900/50 text-gray-300" 
      initial={{ scale: 0 }}
      animate={{ rotate: 180, scale: 1 }}
      transition={{
        delay: 0.4,
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </motion.button> 
  )
}


export const AskAlfredInput = () => {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useRecoilState(messagesState)
  const setAlfredState = useSetRecoilState(alfredState) 
  const setLastMessage = useSetRecoilState(lastMessageState)

  const apiKey = process.env.OPENAI_API_KEY || ""

  const handleSendMessage = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setMessages(state => [...state, { role: "user", content: e.currentTarget.value } ])
      setInput("")
      
      setAlfredState(state => ({ ...state, isAnswering: true }))
      
      scrollToBottom()
      
      OpenAIExt.streamClientChatCompletion({
          model: 'gpt-3.5-turbo',
          messages: [
            { role: "system", content: PROMPT },
            ...messages,
            { role: "user", content: e.currentTarget.value + "(responde de manera irónica en el idioma del mensaje)" }
          ] //TODO:
      }, {
        apiKey,
        handler: {
          onDone() {
              setAlfredState(state => ({ ...state, isAnswering: false }))
              scrollToBottom()
              setLastMessage("")
          },
          onContent(contentDraft, isFinal) {
            setLastMessage(contentDraft)

            scrollToBottom()
            if (isFinal) {
              setMessages(state => [...state, { role: "assistant", content: contentDraft } ])
            }
          }
        }
      })
    }
  }

  return (
    <div className="flex items-center">
      <input 
        value={input}
        onChange={e => setInput(e.currentTarget.value)}
        onKeyDown={handleSendMessage}
        type="text"
        placeholder="Ask anything about me"
        className="placeholder-gray-600 !outline-none w-full h-[10vh] px-5 py-2 bg-transparent text-gray-400"
      />
      {
        input.length > 0 && (
        <motion.svg
          initial={{ rotate: 80, scale: 0 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
          className="w-7 h-7 text-gray-400"
          xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /></motion.svg>
        )
      }
    </div>
  )
}

export const RelatedQuestions = () => {
  return (
    <div className="h-[4vh] pt-4">
      <motion.div 
        initial={{ rotate: 10, scale: 0 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{
          delay: 0.4,
          type: "spring",
          stiffness: 260,
          damping: 20
        }}
        className="transition-all border-gray-800 rounded-full border-2 px-3 py-1 w-fit text-gray-500 hover:border-blue-700 cursor-pointer hover:text-gray-200"
      >
        Está soltero?
      </motion.div>
    </div>
  )
}



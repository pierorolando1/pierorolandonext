import { useRecoilState, useSetRecoilState } from "recoil"
import { motion } from "framer-motion"
import { alfredState, messagesState } from "../../atoms"
import Message, { AnswerMessage, WelcomeMessage } from "../message"
import { useState } from "react"
import { scrollToBottom } from "."
import { api } from "@/features/messages/atoms"
import { ChatGPTAPI } from "chatgpt"

const ExitButton = () => {
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

const AlfredModal = () => {
  const [state, _setAlfredState] = useRecoilState(alfredState)

  const [messages] = useRecoilState(messagesState)

  return state.isOpen ? (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-screen w-screen bg-gray-950/80 fixed backdrop-blur"
    >
      <ExitButton />

      <section className="h-screen max-w-4xl mx-auto">
        <div className={"messages flex flex-col h-[86vh] py-10 overflow-y-scroll " + (state.isAnswering && "!h-screen")}>
          <WelcomeMessage />
          {
            messages.map(({message, type}, i) => (
              <Message key={i} type={type} message={message} />
            ))
          }
          {
            (state.isAnswering && !state.isFirstTime) && <AnswerMessage />
          }
        </div>
        {
          !state.isAnswering ? <><RelatedQuestions /><AskAlfredInput /></> : <></>
        }
      </section>

    </motion.div>
  )  :  <></>

}

const AskAlfredInput = () => {

  const [input, setInput] = useState("")
  const setMessages = useSetRecoilState(messagesState)

  const handleSendMessage = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setMessages(state => [...state, { type: "user", message: e.currentTarget.value } ])
      setInput("")

      sendMessageToAlfred()

      scrollToBottom()
    }
  }

  const sendMessageToAlfred = async () => {
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

const RelatedQuestions = () => {
  return (
    <div className="h-[4vh]">
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


export default AlfredModal

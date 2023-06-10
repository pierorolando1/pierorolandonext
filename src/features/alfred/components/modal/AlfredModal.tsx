import { useRecoilState } from "recoil"
import { motion } from "framer-motion"
import { alfredState, messagesState } from "../../atoms"
import Message, { AnswerMessage, WelcomeMessage } from "../message"
import { AskAlfredInput, ExitButton } from "./components/helpers"
import { scrollToBottom } from "."
import { useEffect } from "react"
import { MAX_MESSAGES } from "@/consts"

const AlfredModal = () => {
  const [state, _setAlfredState] = useRecoilState(alfredState)

  const [messages] = useRecoilState(messagesState)

  useEffect(() => {
    scrollToBottom()
  }, [])

  return state.isOpen ? (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-screen w-screen bg-gray-950/80 fixed backdrop-blur"
    >
      <ExitButton />

      <section className="h-screen max-w-4xl mx-auto">
        <div className={"messages flex flex-col h-[84vh] py-12 overflow-y-scroll modal-scroll " + (state.isAnswering && "!h-[100vh]")}>
          <WelcomeMessage />
          {
            messages.map(({content, role}, i) => (
              <Message key={i} role={role} content={content} />
            ))
          }
          {
            (state.isAnswering && !state.isFirstTime) && <AnswerMessage />
          }
        </div>
        {
          !state.isAnswering && !state.isLimitReached ? <>{/*<RelatedQuestions />*/}<AskAlfredInput /></> : <></>
        }
        {
          state.isLimitReached ? <div className="w-full flex items-center justify-center py-3"><span className="text-gray-500 text-center" >Messages limit reached max { MAX_MESSAGES } per session</span> </div> : <></>
        }
      </section>

    </motion.div>
  )  :  <></>

}

export default AlfredModal

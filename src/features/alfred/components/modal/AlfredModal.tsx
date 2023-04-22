import { useRecoilState } from "recoil"
import { motion } from "framer-motion"
import { alfredState, messagesState } from "../../atoms"
import Message, { AnswerMessage, WelcomeMessage } from "../message"
import { AskAlfredInput, ExitButton, RelatedQuestions } from "./components/helpers"
import { scrollToBottom } from "."
import { useEffect } from "react"

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
        <div className={"messages flex flex-col h-[86vh] py-10 overflow-y-scroll modal-scroll" + (state.isAnswering && "!h-screen")}>
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
          !state.isAnswering ? <><RelatedQuestions /><AskAlfredInput /></> : <></>
        }
      </section>

    </motion.div>
  )  :  <></>

}

export default AlfredModal

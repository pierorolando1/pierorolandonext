import { ALFRED_IMAGE } from "@/consts"
import { motion } from "framer-motion"

export { WelcomeMessage } from "./WelcomeMessage"
export { AnswerMessage } from "./AnswerMessage"

export type MessageProps = {
  role: "system" | "user" | "assistant"
  content?: string
  
  styles?: string
}

export default function Message({ role, content = '', styles = '' }: MessageProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 26,
        duration: 0.3
      }}
      className={"flex py-2.5 sm:px-1 px-2.5 "+ styles}
    >
      {
        role == "system" || role == "assistant" && <img alt="alfred" className="w-10 h-10 rounded-full object-cover mr-3" src={ALFRED_IMAGE} />
      }
      <div
        className={(role == 'user' ?
          "ml-auto bg-gray-700" :
          " shadow shadow-cyan-700 bg-cyan-700/90") + " max-w-xl rounded-xl px-4 py-2 w-fit text-gray-300"
        }>
        <span>{ content }</span>
      </div>
    </motion.div>
  )
}



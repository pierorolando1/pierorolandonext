import { ALFRED_IMAGE } from "@/consts"
import { motion } from "framer-motion"

export { WelcomeMessage } from "./WelcomeMessage"
export { AnswerMessage } from "./AnswerMessage"

export type MessageProps = {
  type: "system" | "user"
  message?: string
}

export default ({ type, message = '' }: MessageProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 26,
      }}
      className="flex py-2.5"
    >
      {
        type == "system" && <img className="w-10 h-10 rounded-full object-cover mr-3" src={ALFRED_IMAGE} />
      }
      <div
        className={(type == 'user' ?
          "ml-auto bg-gray-700" :
          " shadow shadow-blue-700 bg-blue-700/90") + " max-w-xl rounded-xl px-4 py-2 w-fit text-gray-300"
        }>
        <span>{ message }</span>
      </div>
    </motion.div>
  )
}



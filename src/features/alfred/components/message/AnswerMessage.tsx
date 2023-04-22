import { useRecoilState } from "recoil"
import Message from "."
import { lastMessageState } from "@/features/messages/atoms"

export const AnswerMessage = () => {
  const [state] = useRecoilState(lastMessageState)

  return <Message
    styles="!opacity-60"
    role="system"
    content={state}
  />

}

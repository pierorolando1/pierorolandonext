import { useRecoilState } from "recoil"
import Message from "."
import { lastMessageState } from "@/features/messages/atoms"

export const AnswerMessage = () => {
  const [state] = useRecoilState(lastMessageState)

  return <Message
    type="system"
    message={state}
  />

}

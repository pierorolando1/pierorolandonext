import { useSetRecoilState } from "recoil"
import { alfredState } from "../../atoms"
import { useEffect, useState } from "react"
import { ALFRED_IMAGE, WELCOME_MESSAGE } from "@/consts"


export const WelcomeMessage = () => {
  const setAlfredRecoilState = useSetRecoilState(alfredState)
  const [message, setMessage] = useState("")

  useEffect(() => {

    setAlfredRecoilState(v => ({
      ...v,
      isAnswering: true
    }))

    const welcomeMessage = WELCOME_MESSAGE.split("")
    let i = 0

    const interval = setInterval(() => {
      setMessage(welcomeMessage.slice(0, i).join(""))
      i++
      if (i === welcomeMessage.length) {
        clearInterval(interval)
          setAlfredRecoilState(v => ({
            ...v,
            isAnswering: false,
            isFirstTime: false
          }))
      }
    }, 20)

  }, [])

  return (
    <div className="flex py-3">
      <img className="w-10 h-10 rounded-full object-cover mr-3" src={ALFRED_IMAGE} />
      <div className="bg-blue-700/90 max-w-xl rounded-xl px-4 py-2 w-fit text-gray-300 shadow shadow-blue-700">
        <span>{message}</span>
      </div>
    </div>
  )

}

import { useEffect } from "react"
import { getCookie } from "../utils/cookies"

const redirectUrl = 'https://londonmanager.pro/profile'

export default function Auth ({ children }) {
  useEffect(() => {
    if (getCookie('accessToken')) {
      window.location.href = redirectUrl
    }
  }, [])

  return children
}

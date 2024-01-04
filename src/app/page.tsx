"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Home() {
  const { replace } = useRouter()

  useEffect(() => {
    if (!sessionStorage.getItem("loginData")) {
      replace("/authentication/login")
    }
  }, [replace])

  return (
    <main>
      <h1>Dating App</h1>
    </main>
  )
}

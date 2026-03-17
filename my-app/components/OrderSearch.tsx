"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function OrderSearch() {
  const [telephone, setTelephone] = useState("")
  const router = useRouter()

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!telephone) return
    router.push(`/orders/${telephone}`)
  }

  return (
    <form onSubmit={handleSubmit} className="my-6">
      <input
        value={telephone}
        onChange={(e) => setTelephone(e.target.value)}
        placeholder="Enter telephone number"
        className="border p-2 mr-2 rounded-xl min-w-80"
      />

      <button className="bg-purple-500 hover:bg-purple-700 text-white px-6 py-3 rounded-xl mt-4 transition-colors      cursor-pointer hover:scale-101 hover:shadow-md">
        search
      </button>
    </form>
  )
}
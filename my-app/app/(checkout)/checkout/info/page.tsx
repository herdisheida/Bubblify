'use client'

import { useCheckout } from "@/context/CheckoutContext"
import { useRouter } from "next/navigation"
import { useState } from "react"


export default function InfoPage() {
  const { data, setInfo } = useCheckout()
  const router = useRouter()

  const [form, setForm] = useState(data)
  const [error, setError] = useState("")

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit() {
    if (!form.name || !form.telephone) {
      setError("Name and telephone are required")
      return
    }

    if (data.method === "delivery") {
      if (!form.address || !form.city || !form.postalCode) {
        setError("All delivery fields are required")
        return
      }
    }

    setInfo(form)
    router.push("/checkout/review")
  }


  return (
    <div className="p-10">
      <h1 className="text-3xl mb-6">Your Info</h1>

        <div className="mt-6">
            <input name="name"      placeholder="Name"      onChange={handleChange} value={form.name} className="border p-2 mb-4 w-full" />
            <input name="telephone" placeholder="Telephone" onChange={handleChange} value={form.telephone} className="border p-2 mb-4 w-full" />

            {data.method === "delivery" ? (
                <>
                  <input name="address"    placeholder="Address"     onChange={handleChange} value={form.address} className="border p-2 mb-4 w-full" />
                  <input name="city"       placeholder="City"        onChange={handleChange} value={form.city} className="border p-2 mb-4 w-full" />
                  <input name="postalCode" placeholder="Postal Code" onChange={handleChange} value={form.postalCode} className="border p-2 mb-4 w-full" />
                </>
            ) : null}


            {error && <p className="text-red-500">{error}</p>}

            <button onClick={handleSubmit}
                    disabled={!form.name || !form.telephone || (data.method === "delivery" && (!form.address || !form.city || !form.postalCode))}
                    className="bg-sky-500 hover:bg-sky-700 text-white px-6 py-3 rounded mt-4 transition-colors
                              disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none">
              submit
            </button>
        </div>
    </div>
  );
}
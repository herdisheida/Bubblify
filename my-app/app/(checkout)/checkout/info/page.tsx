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

        {/*  TODO
        4. If he decides to have it delivered, the next page (/checkout/info) will ask to
        input the following information: name, address, city, telephone and postal
        code

        5. If he decides to arrange a store-pickup, the next page (/checkout/info) will
        ask to input only the name and telephone
        */}

        <div className="mt-6">
            <input name="name"      placeholder="Name"      onChange={handleChange} className="border p-2 mb-4 w-full" />
            <input name="telephone" placeholder="Telephone" onChange={handleChange} className="border p-2 mb-4 w-full" />

{/* TODO fix - delivery not showing */}
            {data.method === "delivery" ? (
                <>
                  <input name="address"    placeholder="Address"     onChange={handleChange} className="border p-2 mb-4 w-full" />
                  <input name="city"       placeholder="City"        onChange={handleChange} className="border p-2 mb-4 w-full" />
                  <input name="postalCode" placeholder="Postal Code" onChange={handleChange} className="border p-2 mb-4 w-full" />
                </>
            ) : null}


            
            {error && <p className="text-red-500">{error}</p>}

            <button onClick={handleSubmit} className="bg-sky-500 hover:bg-sky-700 text-white px-6 py-3 rounded mt-4 transition-colors">
              submit
            </button>
        </div>
    </div>
  );
}
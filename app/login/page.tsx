'use client'

import { useState } from 'react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

async function handleLogin(e: React.FormEvent) {
  e.preventDefault()

  try {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })

    const data = await res.json()

    alert(data.message)
  } catch (error) {
    alert("Server Error")
  }
}

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-5">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-2">
          ERP System
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Sign in to your account
        </p>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              placeholder="admin@erp.com"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="w-full border rounded-lg p-3 outline-none"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Password
            </label>

            <input
              type="password"
              placeholder="********"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              className="w-full border rounded-lg p-3 outline-none"
              required
            />
          </div>

          <button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg p-3 font-semibold"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

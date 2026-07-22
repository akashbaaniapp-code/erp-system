'use client'

import { useRouter } from 'next/navigation'
import { LogOut, User } from 'lucide-react'

export default function Header() {
  const router = useRouter()

  const handleLogout = () => {
    // কুকি ডিলিট করুন
    document.cookie = 'auth-token=; path=/; max-age=0'
    router.push('/login')
  }

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-white/80 backdrop-blur-sm px-6">
      <h2 className="text-lg font-semibold text-slate-700">
        Dashboard
      </h2>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1.5 text-sm">
          <User size={16} />
          <span>Admin</span>
        </div>
        <button
          onClick={handleLogout}
          className="p-2 text-gray-400 hover:text-red-600 transition rounded-lg hover:bg-red-50"
          title="Logout"
        >
          <LogOut size={18} />
        </button>
      </div>
    </header>
  )
}

'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Warehouse,
  Users,
  Settings,
} from "lucide-react"

const menuItems = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    name: "Products",
    icon: Package,
    href: "/products",
  },
  {
    name: "Sales",
    icon: ShoppingCart,
    href: "/sales",
  },
  {
    name: "Inventory",
    icon: Warehouse,
    href: "/inventory",
  },
  {
    name: "Customers",
    icon: Users,
    href: "/customers",
  },
  {
    name: "Settings",
    icon: Settings,
    href: "/settings",
  },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="h-screen w-64 border-r bg-white p-5 fixed left-0 top-0 overflow-y-auto">
      <h1 className="mb-8 text-2xl font-bold text-slate-800">
        ERP System
      </h1>

      <nav className="space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href || pathname?.startsWith(item.href + '/')

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition ${
                isActive
                  ? 'bg-blue-50 text-blue-600 font-medium'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}

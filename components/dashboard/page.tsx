import { Package, Warehouse, ShoppingCart, Users } from "lucide-react"
import DashboardLayout from "@/components/layout/dashboard-layout"

export default function DashboardPage() {
  const stats = [
    { title: "Total Products", value: "0", icon: Package, color: "blue" },
    { title: "Total Stock", value: "0", icon: Warehouse, color: "green" },
    { title: "Total Sales", value: "৳0", icon: ShoppingCart, color: "purple" },
    { title: "Customers", value: "0", icon: Users, color: "orange" },
  ]

  return (
    <DashboardLayout>
      <div>
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-500 mt-1">Welcome to ERP System</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-xl bg-${stat.color}-50`}>
                  <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}

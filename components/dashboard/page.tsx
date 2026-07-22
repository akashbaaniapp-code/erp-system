import { Package, Warehouse, ShoppingCart, Users } from "lucide-react"

export default function DashboardPage() {
  // ডামি ডাটা
  const stats = [
    { 
      title: "Total Products", 
      value: "0", 
      icon: Package,
      color: "blue"
    },
    { 
      title: "Total Stock", 
      value: "0", 
      icon: Warehouse,
      color: "green"
    },
    { 
      title: "Total Sales", 
      value: "৳0", 
      icon: ShoppingCart,
      color: "purple"
    },
    { 
      title: "Customers", 
      value: "0", 
      icon: Users,
      color: "orange"
    },
  ]

  return (
    <div>
      {/* হেডার */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 mt-1">Welcome to ERP System</p>
      </div>

      {/* স্ট্যাটস কার্ড */}
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow"
          >
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

      {/* রিসেন্ট অ্যাক্টিভিটি */}
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="font-semibold text-gray-800 mb-4">Recent Products</h3>
          <div className="space-y-3">
            <p className="text-sm text-gray-500 text-center py-4">No products yet</p>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="font-semibold text-gray-800 mb-4">Recent Activity</h3>
          <div className="space-y-3">
            <p className="text-sm text-gray-500 text-center py-4">No recent activity</p>
          </div>
        </div>
      </div>
    </div>
  )
}

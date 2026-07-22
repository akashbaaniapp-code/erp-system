import { Package, Warehouse, ShoppingCart, Users, TrendingUp, ArrowUp, ArrowDown } from "lucide-react"
import { prisma } from "@/lib/prisma"
import StatCard from "@/components/dashboard/stat-card"

export default async function DashboardPage() {
  // সরাসরি ডাটাবেজ থেকে ডাটা আনা
  const [productCount, totalStock, totalSales, customerCount] = await Promise.all([
    prisma.product.count(),
    prisma.product.aggregate({ _sum: { quantity: true } }),
    prisma.product.aggregate({ _sum: { price: true } }), // সাময়িক
    prisma.product.count(), // সাময়িক (customers table না থাকলে)
  ])

  const stats = [
    {
      title: "Total Products",
      value: productCount,
      icon: Package,
      trend: "+12%",
      trendUp: true,
      color: "blue"
    },
    {
      title: "Total Stock",
      value: totalStock._sum.quantity || 0,
      icon: Warehouse,
      trend: "+8%",
      trendUp: true,
      color: "green"
    },
    {
      title: "Total Sales",
      value: `৳${(totalSales._sum.price || 0).toFixed(2)}`,
      icon: ShoppingCart,
      trend: "+23%",
      trendUp: true,
      color: "purple"
    },
    {
      title: "Customers",
      value: customerCount || 0,
      icon: Users,
      trend: "+5%",
      trendUp: true,
      color: "orange"
    }
  ]

  return (
    <div>
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 mt-1">Welcome back! Here's what's happening with your business.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            title={stat.title}
            value={stat.value}
            icon={<stat.icon size={24} />}
            trend={stat.trend}
            trendUp={stat.trendUp}
            color={stat.color}
          />
        ))}
      </div>

      {/* Recent Activity Section */}
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {/* Recent Products */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="font-semibold text-gray-800 mb-4">Recent Products</h3>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between border-b border-gray-100 pb-3 last:border-0">
                <div>
                  <p className="font-medium text-gray-800">Product {i}</p>
                  <p className="text-sm text-gray-500">SKU-00{i}</p>
                </div>
                <span className="text-sm font-medium text-gray-700">৳{i * 100}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="font-semibold text-gray-800 mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {['Product added', 'Stock updated', 'New sale'].map((activity, i) => (
              <div key={i} className="flex items-center gap-3 border-b border-gray-100 pb-3 last:border-0">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <p className="text-sm text-gray-600">{activity}</p>
                <span className="text-xs text-gray-400 ml-auto">2 mins ago</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

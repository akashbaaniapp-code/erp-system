'use client'

import { useState } from 'react'
import { Plus, Search } from 'lucide-react'
import Link from 'next/link'
import DashboardLayout from "@/components/layout/dashboard-layout"

const dummyProducts = [
  { id: 1, name: "Product 1", sku: "SKU-001", category: "Electronics", price: 100, quantity: 10 },
  { id: 2, name: "Product 2", sku: "SKU-002", category: "Clothing", price: 50, quantity: 25 },
  { id: 3, name: "Product 3", sku: "SKU-003", category: "Books", price: 30, quantity: 5 },
]

function ProductsContent() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredProducts = dummyProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.sku.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Products</h1>
          <p className="text-gray-500 mt-1">Manage your product inventory</p>
        </div>
        <Link href="/products/add">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition">
            <Plus size={18} />
            Add Product
          </button>
        </Link>
      </div>

      <div className="mb-6">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          />
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left text-xs font-medium text-gray-500 uppercase px-6 py-3">Product</th>
                <th className="text-left text-xs font-medium text-gray-500 uppercase px-6 py-3">SKU</th>
                <th className="text-left text-xs font-medium text-gray-500 uppercase px-6 py-3">Category</th>
                <th className="text-right text-xs font-medium text-gray-500 uppercase px-6 py-3">Price</th>
                <th className="text-right text-xs font-medium text-gray-500 uppercase px-6 py-3">Stock</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredProducts.length === 0 ? (
                <tr>
                  <td colSpan={5} className="text-center py-8 text-gray-500">No products found</td>
                </tr>
              ) : (
                filteredProducts.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4 font-medium text-gray-900">{product.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{product.sku}</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        {product.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right font-medium">৳{product.price}</td>
                    <td className="px-6 py-4 text-right">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        product.quantity > 10 ? 'bg-green-100 text-green-700' :
                        product.quantity > 0 ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {product.quantity} units
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default function ProductsPage() {
  return (
    <DashboardLayout>
      <ProductsContent />
    </DashboardLayout>
  )
}

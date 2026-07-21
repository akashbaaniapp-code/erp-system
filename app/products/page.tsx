'use client'

import { useEffect, useState } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface Product {
  id: string
  name: string
  sku: string
  quantity: number
  price: number
  category: string | null
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error:', error)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">প্রোডাক্ট লিস্ট</h1>
        <p>লোড হচ্ছে...</p>
      </div>
    )
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">প্রোডাক্ট লিস্ট</h1>
        <Link href="/products/add">
          <Button>নতুন প্রোডাক্ট যোগ</Button>
        </Link>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>নাম</TableHead>
            <TableHead>SKU</TableHead>
            <TableHead>পরিমাণ</TableHead>
            <TableHead>দাম</TableHead>
            <TableHead>ক্যাটাগরি</TableHead>
            <TableHead>অ্যাকশন</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.sku}</TableCell>
              <TableCell>{product.quantity}</TableCell>
              <TableCell>৳{product.price}</TableCell>
              <TableCell>{product.category || '-'}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm">
                  এডিট
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

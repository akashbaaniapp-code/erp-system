'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function DashboardPage() {
  const [data, setData] = useState({
    productCount: 0,
    totalStock: 0
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/dashboard')
      .then(res => res.json())
      .then(data => {
        setData(data)
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
        <h1 className="text-3xl font-bold mb-6">ড্যাশবোর্ড</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card><CardContent className="p-6">লোড হচ্ছে...</CardContent></Card>
          <Card><CardContent className="p-6">লোড হচ্ছে...</CardContent></Card>
          <Card><CardContent className="p-6">লোড হচ্ছে...</CardContent></Card>
        </div>
      </div>
    )
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">ড্যাশবোর্ড</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>মোট প্রোডাক্ট</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{data.productCount}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>মোট স্টক</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{data.totalStock}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>অর্ডার</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">০</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

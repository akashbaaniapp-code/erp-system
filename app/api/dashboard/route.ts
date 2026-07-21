import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const productCount = await prisma.product.count()
    const totalProducts = await prisma.product.aggregate({
      _sum: { quantity: true }
    })
    
    return NextResponse.json({
      productCount,
      totalStock: totalProducts._sum.quantity || 0
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'ডেটা লোড করা যায়নি' },
      { status: 500 }
    )
  }
}

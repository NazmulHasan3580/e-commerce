import { Product } from '@/lib/models/ProductModel'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ProductItem({product}: {product :Product}) {
  return (
    <div className='card bg-base-300 shadow-xl mb-4'>
        <figure>
            <Link href={`/product/${product.slug}`}>
                <Image 
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={400}
                    className='object-cover h-70 w-full '
                />
            </Link>
        </figure>
        <div className='card-body'>
            <Link href={`/prodcut/${product.slug}`}>
                <h2 className='card-title font-normal'>{product.name}</h2>
            </Link>
            <p className='mb-2'>{product.brand}</p>
            <div className='card-actions flex item-center justify-between'>
                <span className='text-2xl'>${product.price}</span>
            </div>
        </div>
    </div>
  )
}

'use client'

import useCartService from "@/lib/hooks/useCartStore"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Menu() {
    const {items} = useCartService()
    const [mounted , setmounted] = useState(false)
    useEffect(()=>{
        setmounted(true)
    },[])
  return (
    <div>
        <ul className="flex items-stretch">
            <li>
                <Link className="btn btn-ghost rounded-btn" href='/cart'>
                    Cart
                    {
                        mounted && items.length != 0 && (
                            <div className="badge badge-secondary">
                                {items.reduce((a,c)=> a + c.qty, 0)}{' '}
                            </div>
                        )
                    }
                </Link>
            </li>
            <li>
                <button className="btn btn-ghost rounded-btn" type="button">
                    Sign in
                </button>
            </li>
        </ul>
    </div>
  )
}

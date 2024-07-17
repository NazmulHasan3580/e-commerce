/* eslint-disable @next/next/no-img-element */
import ProductItem from "@/components/products/ProductItem";
import { data } from "@/lib/data";
import productService from "@/lib/services/productService";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title : process.env.Next_PULIC_APP_NAME || "E-Commerce",
  description : process.env.Next_PULIC_APP_DESE || "Nextjs , Server Component, Next auth, daiyui, zustand"
}
export default async function Home() {
  const featuredProducts = await productService.getFeatured()
  const LatestProducts = await productService.getLatest()
  return (
   <>
    <div className="w-full carousel rounded-box mt-4">
      {
        featuredProducts.map((product , index) =>(
          <div key={product._id} id={`slide_${index}`} className="carousel-item relative w-[1000px] h-[150px]">

            <Link href={`/product/${product.slug}`}>
              <img src={product.banner} className="w-full object-cover w-[1000px] h-[150px]" alt={product.name}/>
            </Link>

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href={`#slid-${
                index === 0 ? featuredProducts.length - 1: index -1
              }`}
              className="btn btn-circle"
              >
                -ok
              </a>

              <a href={`#slid-${
                index === 0 ? featuredProducts.length - 1: index -1
              }`}
              className="btn btn-circle"
              >
                ok-
              </a> 

            </div>
          </div>
        ))
      }
    </div>
    <h1 className="text-2xl py-2">Latest Product</h1>
    <div className="grid grid-col-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {
        LatestProducts && LatestProducts.map((product)=>(
        <ProductItem key={product.slug} product={product}/>
      ))
      }
    </div>
   </>
  );
}

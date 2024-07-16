import ProductItem from "@/components/products/ProductItem";
import data from "@/lib/data";
import Image from "next/image";

export default function Home() {
  return (
   <>
    <h1 className="text-2xl py-2">Latest Product</h1>
    <div className="grid grid-col-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {
        data.Product.map((product)=>(
        <ProductItem key={product.slug} product={product}/>
      ))
      }
    </div>
   </>
  );
}

import AddToCart from "@/components/products/AddToCart"
import data from "@/lib/data"
import Image from "next/image"
import Link from "next/link"

export default function ProdcutDetails({params}:{params :{slug :string}}) {
    const product = data.Product.find((x)=>x.slug ===params.slug)
    if(!product){
        return <div>Prodcut Not found</div>
    }
  return<>
    <div className="my-2">
        <Link href='/'>back to product</Link>
    </div>
    <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
            <Image 
                src={product.image}
                alt={product.name}
                width={640}
                height={640}
                sizes="100vw"
                style={{
                    width :'100%',
                    height : 'auto',
                }}
            />
        </div>
        <div>
            <ul className="space-y-4">
                <li>
                    <h1 className="text-xl">{product.name}</h1>
                </li>
                <li>
                    {product.rating} of {product.numReviews}
                </li>
                <li>{product.brand}</li>
                <li>
                    <div className="divider">

                    </div>
                </li>
                <li>
                    Description : {product.description}
                </li>
            </ul>
        </div>
        <div>
            <div className="card bg-base-300 shadow-xl mt-4 md:mt-0">
                <div className="card-body">
                    <div className="md-2 flex justify-between">
                        <div>Price</div>
                        <div>${product.price}</div>
                    </div>
                    <div className="md-2 flex justify-between">
                        <div>Status</div>
                        {product.countInStock > 0 ?'In stock' : " Unavailabe"}
                    </div>

                    {
                        product.countInStock !== 0 && (
                            <div className="card-actions justify-between  ">
                                <AddToCart item ={{...product, qty:0 , color:'', size:''}}/>
                            </div>
                           
                        )
                    }
                </div>
                
            </div>
        </div>
    </div>
  </>
  
}

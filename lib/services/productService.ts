
import { cache } from 'react'
import { dbConnect } from '../dbConnect'
import { Product, ProductSchema } from '../models/ProductModel'
export const revalidate = 3600

const getLatest = cache(async () => {
  await dbConnect()
  const products = await ProductSchema.find({})
  .sort({_id:-1})
  .limit(4)
  .lean()
  return products as Product[]
})

const getFeatured = cache(async()=>{
  await dbConnect()
  const products = await ProductSchema.find({isFeatured:true}).limit(3).lean()
  return products as Product[]
})

const getBySlug = cache(async (slug:string) =>{
  await dbConnect()
  const product = await ProductSchema.findOne({slug}).lean()
  return product as Product
})

const productService = {
  getLatest,
  getFeatured,
  getBySlug
}

export default productService
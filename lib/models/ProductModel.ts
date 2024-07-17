import mongoose from "mongoose"

const ProductMode = new mongoose.Schema(
    {
        name : {type: String, required: true},
        slug : {type: String, required: true, unique:true},
        category : {type : String, required : true},
        image : {type : String, required: true},
        price : {type : Number, required:true },
        brand : {type : String, required:true},
        rating : {type : Number, required:true},
        numReviews : {type : Number, required:true, default : 0},
        countInStock : {type : Number, required:true, default : 0},
        description : {type:String , required :true, default : 0},
        isFeatured :{ type: Boolean, required:true},
        banner:String
    },
    {
        timestamps :true,
    }
)
export const ProductSchema = mongoose.models.products || mongoose.model('products',ProductMode)

export type Product = {
    _id?: string
    name :string
    slug: string
    image :string
    banner ?:string
    price :number
    brand :string
    description :string
    category :string
    rating :number
    numReviews :number
    countInStock :number
    color? : []
    sizes? : []
}
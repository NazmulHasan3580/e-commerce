
import { data } from "@/lib/data";
import { dbConnect } from "@/lib/dbConnect";
import { ProductSchema } from "@/lib/models/ProductModel";
import { userSchema } from "@/lib/models/UserModel";
import { NextRequest, NextResponse } from "next/server";


export async function GET(requst : NextRequest) {
    const {users, Products} = data
    await dbConnect()
    await userSchema.deleteMany()
    await userSchema.insertMany(users)

    await ProductSchema.deleteMany()
    await ProductSchema.insertMany(Products)

    return NextResponse.json({
        message : 'seeded succesfully',
        users,
        Products,
    })
}
import { Product } from '@/lib/models/ProductModel';
import { describe } from 'node:test';
const data = {
    Product :[
        {
            name : 'Free Shirt',
            slug :'free-shirt',
            catagory: 'Shirts',
            image : '/images/shir1.jpg',
            price : 70,
            brand : "Nike",
            rating : 4.5,
            numReviews : 8,
            countInStock : 20,
            description : "A popular Shirt",
            isFeatured : true,
            banner : "/images/banner1.jfif"
        },
        {
            name : 'Fit Shirt',
            slug :'Fit-shirt',
            catagory: 'Shirts',
            image : '/images/shirt2.jpg',
            price : 90,
            brand : "Casic",
            rating : 4.2,
            numReviews : 8,
            countInStock : 25,
            isFeatured : true,
            description : "A popular Shirt",
            banner : "/images/banner2.jfif"
        },
        {
            name : 'Cool Shirt',
            slug :'Cool-shirt',
            catagory: 'Shirts',
            image : '/images/shirt3.jpg',
            price : 80,
            brand : "Adidas",
            rating : 4.7,
            numReviews : 5,
            countInStock : 18,
            isFeatured : true,
            description : "A popular Shirt",
            banner : "/images/banner1.jfif"
        },
        {
            name : 'Slim Shirt',
            slug :'Slim-shirt',
            catagory: 'Shirts',
            image : '/images/shirt4.jpg',
            price : 75,
            brand : "Oliver",
            rating : 4.8,
            numReviews : 4,
            countInStock : 22,
            isFeatured : true,
            description : "A popular Shirt",
            banner : "/images/banner2.jfif"
        },
        ]
}
export default  data
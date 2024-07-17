
import bcrypt from 'bcryptjs'
export const data = {
    users :[
        {
            name : 'John',
            email : 'John@gmail.com',
            password : bcrypt.hashSync("1234"),
            isAdmin :true,
        },
        {
            name : 'Jahe',
            email : 'Jahe@gmail.com',
            password : bcrypt.hashSync("1234"),
            isAdmin :false,
        }
    ],
    Products :[
        {
            name : 'Free Shirt',
            slug :'free-shirt',
            category: 'Shirts',
            image : '/images/shir1.jpg',
            price : 70,
            brand : "Nike",
            rating : 4.5,
            numReviews : 8,
            countInStock : 20,
            description : "A popular Shirt",
            isFeatured : true,
            banner : 'images/hello.jfif'
        },
        {
            name : 'Fit Shirt',
            slug :'Fit-shirt',
            category: 'Shirts',
            image : '/images/shirt2.jpg',
            price : 90,
            brand : "Casic",
            rating : 4.2,
            numReviews : 8,
            countInStock : 25,
            isFeatured : true,
            description : "A popular Shirt",
            banner : '/images/banner1.jpg'
        },
        {
            name : 'Cool Shirt',
            slug :'Cool-shirt',
            category: 'Shirts',
            image : '/images/shirt3.jpg',
            price : 80,
            brand : "Adidas",
            rating : 4.7,
            numReviews : 5,
            countInStock : 18,
            isFeatured : true,
            description : "A popular Shirt",
            banner : 'hello.jfif'
        },
        {
            name : 'Slim Shirt',
            slug :'Slim-shirt',
            category: 'Shirts',
            image : '/images/shirt4.jpg',
            price : 75,
            brand : "Oliver",
            rating : 4.8,
            numReviews : 4,
            countInStock : 22,
            isFeatured : true,
            description : "A popular Shirt",
            banner : 'hello.jfif'
        },
        ]
}

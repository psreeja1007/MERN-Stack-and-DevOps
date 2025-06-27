// import Product from "../models/Product.js";
// import Category from "../models/Category.js";

// export const createNewCategory = async (req,res) => {
//     let {name } = req.body;

//     const newCategory = new Category({
//         name: name
//     })

//     const category = newCategory.save();

//     res.status(200).json(category);
// }

// export const getAllProducts = async (req,res) => {
//     try {
//         const page = req.query.page || 0;
//         const limit = req.query.limit || 50;
//         const products = await Product.find()
//                                 .sort({createdAt : -1})
//                                 .skip(page * limit)
//                                 .limit(limit)
//                                 .populate("category");

//         res.status(200).json(products)
//     } catch (error) {
        
//     }
// }

// export const createNewProduct = async (req,res) => {
//     try {
//         const { name, description,price,category } = req.body;

//         const newProduct = new Product({
//             name: name,
//             description: description,
//             price: price,
//             category: category
//         })

//         const product = await newProduct.save();

//         res.status(200).json(product)
//     } catch (error) {
        
//     }
// }


import Product from "../models/Product.js";
import Category from "../models/Category.js";

// Add get all categories controller
export const getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find().sort({ name: 1 });
        console.log('Categories found:', categories); // Debug log
        return res.status(200).json({
            success: true,
            categories: categories
        });
    } catch (error) {
        console.error('Error fetching categories:', error);
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const createNewCategory = async (req, res) => {
    try {
        const { name } = req.body;
        
        if (!name) {
            return res.status(400).json({
                success: false,
                message: "Category name is required"
            });
        }

        const newCategory = new Category({
            name: name
        });

        const savedCategory = await newCategory.save();
        console.log('Category created:', savedCategory); // Debug log

        return res.status(201).json({
            success: true,
            category: savedCategory
        });
    } catch (error) {
        console.error('Error creating category:', error);
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Your existing getAllProducts and createNewProduct functions...
export const getAllProducts = async (req,res) => {
    try {
        const page = req.query.page || 0;
        const limit = req.query.limit || 50;
        const products = await Product.find()
                                .sort({createdAt : -1})
                                .skip(page * limit)
                                .limit(limit)
                                .populate("category");

        return res.status(200).json({
            success: true,
            products: products  // Return as an object with products array
        });
    } catch (error) {
        console.error('Error fetching products:', error);
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const createNewProduct = async (req, res) => {
    try {
        console.log('Received product data:', req.body);  // Debug log
        
        const { name, description, price, category, image } = req.body;

        const newProduct = new Product({
            name,
            description,
            price,
            category,
            image
        });

        const product = await newProduct.save();
        console.log('Saved product:', product);  // Debug log

        return res.status(201).json({
            success: true,
            message: 'Product created successfully',
            product
        });
    } catch (error) {
        console.error('Error creating product:', error);
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

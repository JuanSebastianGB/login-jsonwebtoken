import Product from '../models/Product.js';

export const createProduct = async (req, res) => {
    const { name, category, imgUrl } = req.body;
    const product = { name, category, imgUrl };
    const newProduct = new Product(product);
    const createdProduct = await newProduct.save();
    res.status(201).json({ createdProduct });
}
export const getProducts = async (req, res) => {
    const products = await Product.find();
    res.status(200).json({ products });
}
export const getProductById = (req, res) => {
    res.send('Creating product');
}
export const updateProductById = (req, res) => {
    res.send('Creating product');
}
export const deleteProductById = (req, res) => {
    res.send('Creating product');
}
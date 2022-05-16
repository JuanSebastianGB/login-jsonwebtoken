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
export const getProductById = async (req, res) => {
    const { productId } = req.params;
    const product = await Product.findById(productId);
    res.status(200).json({ product });
}
export const updateProductById = async (req, res) => {
    const { productId } = req.params;
    const product = await Product.findByIdAndUpdate(productId, req.body, { new: true });
    res.status(200).json({ product });
}
export const deleteProductById = async (req, res) => {
    const { productId } = req.params;
    const product = await Product.findByIdAndDelete(productId);
    res.status(200).json({ success: 'deleted', product });
}
import { Request, Response } from "express";
import { Product } from "../models/Product";

export const addProduct = (req:Request,res:Response)=>{
    const {price,name,description} = req.body

    const newProduct = new Product({name,price,description})

    newProduct.save().then(()=>{
        res.json({
            message:'data saved successfully!',
            payload:newProduct
        })
    }).catch(err=>{
        res.json({
            error:err
        })

    })

}

export const getProducts = async (req:Request,res:Response)=>{
    try{

    const products = await Product.find()
    res.json({
        message:'gets Products successfully!',
        payload:products
    })
    }catch(err){
        res.json({
            error:err
        })
    }


}

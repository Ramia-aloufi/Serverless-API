import express from 'express'
import dotenv, { config } from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'

import productRoute from './src/router/product'
import { dev } from './src/config'
import { Product } from './src/models/Product'


dotenv.config()

const app = express()

const port = dev.app.port
const mongoURL = dev.db.url

const databaseConnect = async()=>{
    try{
    await mongoose.connect(mongoURL!)
    console.log('Database Connected');
    }catch(err){
        console.log(err);
    }

}
databaseConnect()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.use('/api/product',productRoute)

app.get('/api/',(req,res)=>{
    res.send('hello')
})

app.get('/api/posts', async(req,res)=>{
    try{
        const products = await Product.find()
        res.json({
            message:'gets Posts successfully!',
            payload:products
        })
        }catch(err){
            res.json({
                error:err
            })
        }
})

app.get('/api/*',(req,res)=>{
    res.status(404).send('Sorry, the requested page was not found.');
})


module.exports = app



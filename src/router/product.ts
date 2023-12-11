
import express from 'express'
import { addProduct, getProducts } from '../controller/product'

const router = express.Router()


router.post('/',addProduct)
router.get('/',getProducts)






export default router
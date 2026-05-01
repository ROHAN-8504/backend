const express = require('express')
const cors=require('cors')
const app = express()
const port = 3000
//middlewares
app.use(cors())
app.use(express.json())
let db=require('./src/config/db')
let products= require('./src/models/product.model')

//health check
app.get('/health',(req,res)=>{
res.json({"msg":"server is active"})
})

//API1-seller will send the products and we will
//store product details in our db

app.post('/products',async (req,res)=>{
 try {
  const {title,price,image}=req.body
   await products.create({title,price,image})
   res.status(201).json({"msg":"product are saved"})
 } catch (error) {
  res.json({msg:error.message})
 }
})
//API2-FTECH ALL THE PRODUCTS
app.get('/products',async (req,res)=>{
  try {
  let allproducts= await products.find()
  res.status(200).json(allproducts)
  } catch (error) {
    res.json({msg:error.message})
  }
})


app.listen(port,()=>{
    console.log(`the server is running on ${port}`)
    db();
    console.log('db is connected')
   
})

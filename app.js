const express = require('express')
const cors=require('cors')
const app = express()
const port = 3000
let products=require('./product')
app.use(cors())
app.use(express.json())

//design an api __>   /fact  -->cat is an animla



let about={
  "aboutUs": {
    "title": "About Us",
    "subtitle": "Redefining Your Shopping Experience",
    "description": "We are an innovative ecommerce platform dedicated to delivering high-quality products at unbeatable prices. Our mission is to make online shopping simple, fast, and reliable for everyone.",
    
    "mission": {
      "title": "Our Mission",
      "content": "To provide customers with a seamless and enjoyable shopping experience by offering curated products, fast delivery, and exceptional customer support."
    },

    "vision": {
      "title": "Our Vision",
      "content": "To become a globally trusted ecommerce brand known for quality, transparency, and customer satisfaction."
    },

    "values": [
      {
        "title": "Customer First",
        "description": "We prioritize customer needs and satisfaction above everything else."
      },
      {
        "title": "Quality Assurance",
        "description": "We ensure that every product meets high standards before reaching you."
      },
      {
        "title": "Transparency",
        "description": "We believe in honest pricing and clear communication."
      },
      {
        "title": "Innovation",
        "description": "We continuously improve our platform to enhance your shopping experience."
      }
    ],

    "stats": {
      "customers": "50,000+",
      "products": "10,000+",
      "ordersDelivered": "120,000+",
      "countriesServed": "15+"
    },

    "team": [
      {
        "name": "Rohit Sharma",
        "role": "Founder & CEO",
        "image": "https://example.com/images/team1.jpg"
      },
      {
        "name": "Ananya Gupta",
        "role": "Head of Operations",
        "image": "https://example.com/images/team2.jpg"
      },
      {
        "name": "Vikram Patel",
        "role": "CTO",
        "image": "https://example.com/images/team3.jpg"
      }
    ],

    "timeline": [
      {
        "year": "2021",
        "event": "Company founded with a vision to simplify online shopping."
      },
      {
        "year": "2022",
        "event": "Reached 10,000 customers and expanded product range."
      },
      {
        "year": "2023",
        "event": "Launched mobile app and international shipping."
      },
      {
        "year": "2024",
        "event": "Crossed 100,000 successful deliveries."
      }
    ],

    "contact": {
      "email": "support@example.com",
      "phone": "+91-9876543210",
      "address": "Bangalore, India"
    }
  }
}
//design an api --> if someone send get request to
//a route  /products   we will send our products array
//as a response

app.get('/products',(req,res)=>{
    res.json(products)
})

app.get('/about',(req,res)=>{
  res.json(about)
})


app.get("/fact",(req,res)=>{
    res.json({data:["cat is an animal"]})
})

app.post('/products',(req,res)=>{
  const {id,price,title,image}=req.body
  let newproduct={id,price,title,image}
  products.push(newproduct)
  res.json({msg:"product saved succesfully"})
})

app.post('/signup',()=>{
  
})



app.listen(port,()=>{
    console.log(`the server is running on ${port}`)
})

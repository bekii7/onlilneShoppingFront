const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const cors = require("cors")

const app = express()
const server = http.createServer(app)
app.use(cors())
app.use(bodyParser.json())

app.get("/products",async (req,res)=>{
try {
	const response = await fetch("http://localhost:8000/products");
	const result = await response.json();
	res.status(200).json(result)
} catch (error) {
	console.error(error.data);
}
})


app.post("/newItem", async (req, res) => {
  const { id, user } = req.body;
  let userFound = false;
  try {
    const result = await fetch('http://localhost:1000/cart');
    const carts = await result.json();
console.log(carts)
    for (const cart of carts) {
      if (cart.user === user) {
        if (!Array.isArray(cart.items)) {
          cart.items = []; 
        }
        cart.items.push(id);
        userFound = true;
        await fetch('http://localhost:1000/cart', {
          method: "PATCH",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(carts)  
        });
        break;
      }
    }

    if (!userFound) {
      carts.push({ user: user, items: [id] });
      await fetch('http://localhost:1000/cart', {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(carts)  
      });
    }

    

    res.status(200).json({ message: "Item added successfully", carts });

  } catch (error) {
    console.error("Error processing the request:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});


const Port = 3000
server.listen(Port,()=>{
  console.log("server is running ")
})
const express = require("express");
const feeRoute = require("../routes/feeRoute")

const app = express();

const PORT = 8888;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
})

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.get("/",(req,res)=>res.send("This is working"))
app.post("/",(req,res)=>{const formData = req.body;
  console.log('Form data received:', formData);
  // Process the form data as needed
  // Here you can store it in a database, send emails, etc.
  
  // Send a response back to the client
  res.json({ message: 'Form data received successfully' });
})
app.use(feeRoute)

app.listen(PORT, ()=>{
    console.log('server is running........'+PORT)
})
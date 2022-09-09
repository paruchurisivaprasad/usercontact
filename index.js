const express = require("express");
const cors = require('cors');
const app = express();
app.use(cors());
const os=require('os');

const mongoose=require('mongoose');

mongoose.connect("mongodb+srv://paruchurisivaprasad:alMA933@cluster0.webkl.mongodb.net/contactForm?retryWrites=true&w=majority");
let c=0;




const User = require("./model");
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.get("/", (req, res) => {
   console.log(os.platform());
console.log(os.hostname());
console.log(++c);
console.log("raj");

  res.send(`<h1> paruchuri sivaprasad</h1>`);

});

//API to Insert User Details
app.post("/v1/contactus", async (req, res) => {
  try {
      console.log(req.body)
    const { name, phoneNumber, email, message } = req.body;
    if (!(name && phoneNumber && email && message)) {
      res.status(400).send("All fields are are reqired");
    }
    const user=await User.create({
        name:name,
        phonenumber:phoneNumber,
        email:email,
        message:message
    });
    res.status(201).json(user);
  } catch(error) {
    console.log(error);
  }
});
app.get('/alldata',(req,res)=>{

  User.find({})
  .then(result=>{
    res.json(result)
  }).catch(err=>{
    res.json(err);
  })
})
app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});

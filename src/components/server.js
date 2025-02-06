// const express = require("express");
// const app = express();
// app.use(express.json());
// app.use(cors());

// const dotenv = require("dotenv");
// dotenv.config();

// const PORT = process.env.PORT || 5000;

// app.get("/", (req, res) => {
//  const {firstName, lastName, email} = req.body;
//  res.status(200).json({
//     message: `Welcome ${firstName} ${lastName}`,
//     data:{
//         email: email.data,
//         firstName: firstName.data,
//         lastName: lastName.data
//     }, 
//     status: "success"
//  })
// });

// app.listen(PORT, ()=>{
//     console.log(`Server is up and running on port ${PORT}`);
    
// })
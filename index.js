const express = require('express');
const app = express();
const port = process.env.PORT || 1000;

app.get('/',(req,res)=>{
    res.send("<h1> Hi cutie! </h1>")
})

app.listen(port, () =>
    console.log("Server is running !")
)

                        
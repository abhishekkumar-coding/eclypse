const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/productsRoutes.js');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/products', productRoutes);

app.get("/", (req, res)=>{
    res.send("hello this is working")
})

app.listen("8000", () => {
    console.log(`Server running`);
});

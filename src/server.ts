import express, { response } from "express";
import "dotenv/config"
import {supabase} from "./config/supabaseClient.js"
const app = express();
const PORT = process.env.PORT || 3001



app.get("/products", async ( req,res ) => {
    const {data, error} = await supabase
    .from("products")
    .select()
})


app.get("/products/:id", async (req, res) => {
const {data ,error} = await supabase
.from("products")
.select()
 .eq("id", req.params.id)


if(error){
return res.send("404 not found")
}

return res.send(data);
})

app.post("/products", async (req, res) =>{
    const {data, error} = await supabase 
    .from("products")
    .insert({"data.id": 45, "data.name": "Matt's test test", "data.price": 1.00, "data.stock": 5  })
    .select()
})



app.listen(3001, () => console.log("Server running on port: 3001"));


 
import express, { response } from "express";
import "dotenv/config";
import { supabase } from "./config/supabaseClient.js";
const app = express();
const PORT = process.env.PORT || 3001;

app.get("/products", async (req, res) => {
  const { data, error } = await supabase.from("products").select();

  if (error) {
    console.error(error);
    return res.status(500).json({error: "something went wrong"});
  }

  return res.send(data);
});

app.get("/products/:id", async (req, res) => {
  const { data, error } = await supabase
    .from("products")
    .select()
    .eq("id", req.params.id)
    .maybeSingle();

  if (error) {
    return res.status(500).json({error: "Something went wrong"});
  }

  if(!data){
    return res.status(404).json({error: "Product was not fount"});
  }

  return res.json(data);

 
});


app.post("/products", async (req, res) => {
  const { data, error } = await supabase
    .from("products")
    .insert({ id: 45, name: "Matt's test test", price: 1.0, stock: 5 })
    .select();
});



app.listen(3001, () => console.log("Server running on port: 3001"));

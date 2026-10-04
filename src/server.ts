import express, { response } from "express";
import "dotenv/config";
import { supabase } from "./config/supabaseClient.js";
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3001;

app.get("/products", async (req, res) => {
  const { data, error } = await supabase.from("products").select();

  if (error) {
    console.error(error);
    return res.status(500).json({ error: "something went wrong" });
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
    return res.status(500).json({ error: "Something went wrong" });
  }

  if (!data) {
    return res.status(404).json({ error: "Product was not fount" });
  }

  return res.send(data);
});

app.post("/products", async (req, res) => {
  const productInformation = req.body;

  const { data, error } = await supabase
    .from("products")
    .insert({
      name: productInformation.name,
      price: productInformation.price,
      stock: productInformation.stock,
    })
    .select();
  if (error) {
    console.error(error);
    return res.status(500).json({ error: "could not create product" });
  }

  return res.status(201).json(data);
});

app.put("/products/:id", async (req, res) => {
  const updatingInformation = req.body;
  const { data, error } = await supabase
    .from("products")
    .update({ 
      description: updatingInformation.description ,
      name: updatingInformation.name,
      price: updatingInformation.price,
      stock: updatingInformation.stock,
    })
    .eq("id", req.params.id)
    .select()
    .maybeSingle();

  if (error) {
    console.error(error);
    return res.status(500).json({ error: "Could not update product" });
  }
  if (!data) {
    return res.status(404).json({ error: "product was not found" });
  }

  return res.status(200).json(data);
});

app.listen(3001, () => console.log("Server running on port: 3001"));

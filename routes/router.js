import express, { query } from "express";
import fs from "fs";
import path from 'path';
const router = express.Router();
const __dirname = import.meta.dirname;


const deportes=[];
const nombre=

//Ruta raiz
router.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname, "../views/index.html"))
})

//Ruta que recibe nombre y precio
router.get("/agregar", (req, res) => {
    const { nombre, precio } = req.query;
    const deporte = {
        nombre,
        precio, 
      };  
    const { data } = JSON.parse(fs.readFileSync("Deportes.json", "utf8")); 
    const deportes = data.deporte;

    deportes.push(deporte); 
    fs.writeFileSync("Deportes.json", JSON.stringify({ deportes })); 
    console.log(data)
    res.json(data);
    return
  });

  export default router;
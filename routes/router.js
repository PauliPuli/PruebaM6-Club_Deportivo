import express from "express";
import fs from "fs";
import path from "path";
const router = express.Router();
const __dirname = import.meta.dirname;

//Ruta raiz
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/index.html"));
});

//Ruta que recibe nombre y precio
router.get("/agregar", (req, res) => {
  const { nombre, precio } = req.query;
  const deporte= {nombre, precio};
  const postData= (deporte)=>{
    let deportes = [];//aquí inserta los objetos al json

    try {
        const data = fs.readFileSync("Deportes.json", "utf8");
        const deporteData = JSON.parse(data);
        if (deporteData.deportes) {
          deportes = deporteData.deportes;
        } 
        deportes.push(deporte);
        fs.writeFileSync("Deportes.json", JSON.stringify({ deportes }));
        console.log(`${deporte.nombre} agregado a la lista`)
      } catch (error) {
        console.log("No se pudo agregar a Deportes.json: " + error.message);
      }
      return postData
};
res.send(`${deporte.nombre} agregado a la lista`);
postData(deporte)
});


export default router;

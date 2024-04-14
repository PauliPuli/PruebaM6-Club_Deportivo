import fs from "fs";

//Recibe
const postData= (nombre,precio)=>{
    const deporte= {nombre, precio};
    let deportes = [];//aquí inserta los objetos al json

    try {
        const data = fs.readFileSync("Deportes.json", "utf8");
        const deporteData = JSON.parse(data);
        if (deporteData.deportes) {
          deportes = deporteData.deportes;
        } 
        deportes.push(deporte);
        fs.writeFileSync("Deportes.json", JSON.stringify({ deportes }));
        console.log("Deporte agregado");
      } catch (error) {
        console.log("No se pudo agregar a Deportes.json: " + error.message);
      }
      return postData
};


export { postData };
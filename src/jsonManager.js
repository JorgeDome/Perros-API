const fs = require("fs");
const { get } = require("http");

function readFile(){
    let archivoJson = fs.readFileSync('src/datos.json');
    let archivo = JSON.parse(archivoJson);
    return archivo ? archivo : [];
    

}

function writeFile(perros){
    let perrosJson = JSON.stringify(perros);
    fs.writeFileSync('src/datos.json', perrosJson);
}

function savePerro(perro){
    let perros = readFile();
    perros.push(perro);
    writeFile(perros);

}
exports.savePerro = savePerro;

function readPerros(){
    return readFile();
}
exports.readPerros = readPerros;

function deletePerro(perroId){
    let perros = readFile();
    perros = perros.filter(perro => perro.id != perroId);
    writeFile(perros);

}
exports.deletePerro = deletePerro;


function editPerro(perro){
   let perros = readFile();
   perros = perros.filter(x => x.id != perro.id);
   perros.push(perro);
   writeFile(perros);
   
}
exports.editPerro = editPerro;

function getPerro(perroId){
    let perros = readFile();
    let perro = perros.find(x => x.id == perroId);
    
    return perro
}

exports.getPerro = getPerro;









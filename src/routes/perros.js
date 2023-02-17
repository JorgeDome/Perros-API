const { Router } = require('express');
const router = Router();
const _ = require('underscore');
const {
    v4: uuidv4
} = require('uuid');
const jsonManager = require('C:/Users/jorge/OneDrive/Documentos/Trabajo/Perros-Project/Perros-API/src/jsonManager.js');

router.get('/perros', (req, res) => {
    let perros = jsonManager.readPerros();
    res.json(perros);
});

router.post('/perros', (req, res) => {
    let perro = req.body;
    if (!perro.nombre || !perro.edad || !perro.raza || !perro.descripcion || !perro.image) {
        res.status(400).send("Ingresa todos los datos");
        return;
    }
    perro.id = uuidv4();
    jsonManager.savePerro(perro);
    res.status(201).send('Perro creado correctamente')
});

router.put('/perros/:id', (req,res)=> {
    const { id } = req.params;
    const { nombre, edad, raza, image, descripcion } = req.body;
    if (id && nombre && edad && raza && image && descripcion){
        jsonManager.updatePerro(id, nombre, edad, raza, image, descripcion);
        res.json({ message: 'Perro actualizado correctamente' });
    } else {
        res.status(500).json({ error: 'Hubo un error' });
    }
});

router.delete('/perros/:id', (req, res) => {
    const { id } = req.params;
    jsonManager.deletePerro(id);
    res.json({ message: 'Perro eliminado correctamente' });
});

module.exports = router;

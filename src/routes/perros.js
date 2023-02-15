const {
    Router
} = require('express');
const router = Router();
const _ = require('underscore')

const perros = require('../datos.json')
router.get('/', (req, res) => {
    res.json(perros)
})

router.post('/', (req, res) => {
    const {
        id,
        nombre,
        edad,
        raza,
        image,
        descripcion
    } = req.body;
    if (id && nombre && edad && raza && image && descripcion) {
        const id = perros.length + 1
        const newDog = {
            ...req.body,
            id
        };
        perros.push(newDog);
        res.json(perros);
    } else {
        res.status(500).json({
            error: 'Hubo un error'
        });
    }

});


router.put('/id:', (req,res)=> {
    const {id}= req.params;
    const {
        nombre,
        edad,
        raza,
        image,
        descripcion
    } = req.body;
    if (id && nombre && edad && raza && image && descripcion){
        _.each(perros, (perro,i)=>{
            if(perro.id == id){
                perro.nombre = nombre;
                perro.edad = edad;
                perro.raza = raza;
                perro.image = image;
                perro.descripcion = descripcion;
            }
        });
        res.json(perros);
    } else{
        res.status(500).json({error:'Hubo un error'})
    }
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    _.each(perros, (perro, i) => {
        if (perro.id == id) {
            perros.splice(i, 1);
        }
    });
    res.send(perros);
});

module.exports = router;
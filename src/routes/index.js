const {
    Router
} = require('express');
const router = Router();

const perros = require('../datos.json');


router.get('/', (req, res) => {
    res.json(perros)
})

module.exports = router;
const {Router} = require('express');

const {
   get,
   gets,
   post,
   put,
   del

} = require('../controllers/job');

const router = Router();

// llama a todos los datos
router.get('/',gets);

//obtiene a un empleado 
router.get('/:id', get);

// crea un dato
router.post('/', post);

// actualiza un dato
router.put('/:id', put);

//elimina un dato permanentemente 
router.delete('/:id', del);

module.exports = router;


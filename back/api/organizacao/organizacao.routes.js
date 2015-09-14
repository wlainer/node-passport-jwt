var express = require('express');
var router = express.Router();

var Cliente = require('./organizacao.index');

router.get('/', Cliente.list);
router.get('/:id', Cliente.read);
router.post('/', Cliente.create);
router.put('/:id', Cliente.update);
router.delete('/:id', Cliente.remove);

module.exports = router;
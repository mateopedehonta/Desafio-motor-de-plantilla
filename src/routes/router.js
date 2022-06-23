const { Router } = require('express')
const router = Router()
const {addProducts,form,allProducts} = require('../controllers/Controllers')


router.post('/productos',addProducts)

router.get("/productos",allProducts)

router.get("/",form)

module.exports = router
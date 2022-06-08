const router = require('express').Router()
const {signup} = require('../controllers/auth.controler');



router.post('/signup' , signup);



module.exports= router; 
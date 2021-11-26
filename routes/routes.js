const { Router } = require('express');
// const { check } = require('express-validator');




// const { googleSingIn} = require('../controllers/auth');
const { googleVerify } = require('../helpers/google-verify');


const router = Router();

const express = require('express');
const app = express();

router.post('/dato',[
    console.log('si llego :D')
], googleVerify );
// app.post('', (req, res)=>{
//     console.log("si llego :D");
// })
// router.post('',(req, res) => {
//     console.log('si llego :D')
// });
module.exports = router;
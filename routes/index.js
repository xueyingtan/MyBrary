const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.render('index').catch((err)=>console.error(err))
})

module.exports = router;
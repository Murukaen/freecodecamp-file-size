"use strict";

const APP = require('express')()
const PORT = process.env.PORT || 8080
const PATH = require('path')
const MULTER  = require('multer')
const UPLOAD = MULTER({ dest: 'uploads/' })

APP.get('/',(req,res) => {
  res.sendFile(PATH.join(__dirname+'/index.html'))
});

APP.post('/get-file-size', UPLOAD.single('myFile'), (req, res) => {
    res.send({size:req.file.size})
})

APP.listen(PORT, () => {
  console.log('Example app listening on port ' +  PORT)
})
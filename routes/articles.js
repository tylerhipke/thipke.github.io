const express = require('express');
const router = express.Router();

// get one specific article as an object

router.get('/:id', function(req, res){
    console.log("id", req.params.id);
    res.send('Hello world');
});

module.exports = router;
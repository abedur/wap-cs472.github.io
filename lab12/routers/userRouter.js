const express = require('express');
const path = require('path');
const router = express.Router({
    "caseSensitive" : false,
    "strict": false
});

router.get('/add', (req, res, next)=>{ 
  res.sendFile(path.join(__dirname,'..','views','add-user.html'));
});

router.post('/add',(req, res, next)=>{
  console.log(req.body);
  console.log(req.body.fname, req.body.lname);
  res.end('Done from user....');
});

router.get('/error',(req, res, next)=>{
  throw new Error('Demo error');
});

module.exports = router;
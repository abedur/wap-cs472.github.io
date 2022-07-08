const express = require('express');
const path = require('path');

const router = express.Router({
    "caseSensitive" : false,
    "strict": false
});

router.get('/add', (req, res, next)=>{
    res.sendFile(path.join(__dirname, '..','views','add-product.html')); // dirname pint to the routes dir
    // const html = `          
    // `;
    // res.send(html);
});

router.post('/add',(req, res, next)=>{
    console.log(req.body);
    console.log(req.body.pname, req.body.price);
    res.end('Done....');
});

router.get('/error',(req, res, next)=>{
    throw new Error('Demo error from product');
  });
  
module.exports = router;
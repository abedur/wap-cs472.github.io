const express = require('express');
const path = require('path');
const productRouter = require('./routers/productRouter');
const userRouter = require('./routers/userRouter');
const app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.urlencoded({
    extended: true
}));

app.use(express.static(path.join(__dirname,'public')));

app.use('/product',productRouter);
app.use('/user',userRouter);

app.use((err, req, res, next)=>{
    res.status(500).send(`Error found. ${err}`);
});

app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(__dirname, 'views','404.html'));
});

const port = app.get('port');
app.listen(port, ()=>{
    console.log("Server running on port: "+port);
});

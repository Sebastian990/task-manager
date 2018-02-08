const express = require('express');
const app = express();

//agrega comentario inicial 
app.get('/', (request, response)=>{
   response.send(200);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);

const express = require('express');
const app = express();

app.get('/', (request, response)=>{
   response.send(200);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
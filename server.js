const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/save/user', function(request, response){
    console.log(request.body);
    response.status(200);
    response.send("Thank you for using my server! 🤖");
});

app.get('/read/user', function(request, response){
});

app.listen(3000);

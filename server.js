const express = require('express');

const server = express();


server.all('/', (req, res)=>{
    res.send('server is online')
})
function keepAlive(){
    server.listen(2000, ()=>{console.log("Server is Ready!")});
}
module.exports = keepAlive;
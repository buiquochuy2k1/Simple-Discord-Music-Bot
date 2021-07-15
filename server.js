const express = require('express');
const path = require('path');
const server = express();




server.get('/', (req, res) => {
  res
  .status(200)
  .send('BOT DANG DUOC CHAY ROI HAHA')

})

function keepAlive(){

   server.listen(3000, ()=>{console.log("Server đang được chạy ✔️")});

}



module.exports = keepAlive;
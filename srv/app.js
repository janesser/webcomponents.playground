const express = require('express')
const app = express()
const port = 3000
const dirName = './src'

const serveIndex = require('serve-index');

app.use('/js/', express.static(dirName)) // point to optimized dist
app.use('/public', express.static('./public'));
//app.use('', serveIndex(dirName))

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
//Constants
const express = require('express')
const app = express()
const port = 8081

//App
app.use(express.static('public'))
app.get('/', (req, res) => res.sendfile('public/index.html', {root: __dirname }))

app.listen(port, () => console.log(`App listening on port ${port}!`))
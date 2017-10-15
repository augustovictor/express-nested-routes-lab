const express = require('express')

const routesV1 = require('./routes/v1');

const app = express()

app.use('/api/v1', routesV1)

app.listen(3000, () => console.log('Running on port 3000'))
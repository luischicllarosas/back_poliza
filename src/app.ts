import express from "express";
import Routes from "./routes";
import cors from "cors";
const app = express()
const PORT = 3000

import './db'

app.set('port', PORT)

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: false }))
// app.use(morgan('dev'))

app.use('/api/', Routes)

app.listen(app.get('port'), () => {
    console.log('Server on port ', PORT);

})
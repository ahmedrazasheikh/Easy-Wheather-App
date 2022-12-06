import express from 'express';
import path from 'path';
import cors from 'cors';
const app = express()
const port = process.env.PORT || 5001;

app.use(cors());

app.get('/weather', (req, res) => {
    console.log("request ip: ", req.ip);
    
    res.send({
        temp: 30,
        min: 26,
        max: 31,
        humidity: 72,
        serverTime: new Date().toString()
    });
})
app.get('/time', (req, res) => {
    console.log("request ip: ", req.ip);
    res.send('Hello World! ' + new Date().toString());
})

const __dirname = path.resolve();
app.use('/', express.static(path.join(__dirname, './build')))
app.use('*', express.static(path.join(__dirname, './build')))


app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})
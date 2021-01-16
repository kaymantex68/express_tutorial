import express from 'express'
import path from 'path'
import { requestTime, logger } from './middlewares'

const PORT = 3000;
const app = express();

app.use(express.static(path.resolve(__dirname, 'static')))
app.use(requestTime)
app.use(logger)


// app.get('/',(req,res)=>{
//     // res.send('<h1>hellow</h1>')
//     res.sendFile(path.join(__dirname,'static','index.html'))
// })

app.get('/download', (req, res) => {
    // res.send('<h1>hellow</h1>')
    // console.log(req.requestTime)
    res.download(path.join(__dirname, 'static', 'index.html'))
})



app.listen(PORT, () => {
    console.log(`server has been started on PORT ${PORT}`)
})
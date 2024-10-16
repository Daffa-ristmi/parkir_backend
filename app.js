import express from "express"
import router from "./router.js"
import bodyParser from "body-parser"

const app = express()

// app.get("/", (req, res) => {
//     res.json({message: "hello world"})
// })

// app.get("/nama", (req, res) => {
//     res.json({message: "hello ristmi"})
// })
app.use(bodyParser.json())
app.use(router)

const port = 3000
app.listen(port, () => {
    console.log(`Application is running on port ${port}`)
})
const express = require('express')

const app = express()

app.use(require('morgan')('dev'))

app.get('/', (_req, res) => {
    res.status(200).json({
        message: "Working successfully"
    })
})

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log('App is listening on PORT ', PORT)
})
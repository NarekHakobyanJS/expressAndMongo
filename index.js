const express = require('express')
const { connectToDb, getDb } = require('./db.js')
const app = express()
const port = 3000

//db փոփոխականին վերագրվելու է 
// getDb ֆունկցիայի կանչը որը ստեղծել ենք db ֆայլում
// և որը հետեր տալիս DataBase-ը

let db

//connectToDb ի callBack ֆունկցիան որպես արգումենտ ստանում է error - ը
connectToDb((err) => {
    if (!err) {
        //եթե error-ը չկա մենք միացնումենք ծրագրին լսելը
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        })
        // express - ի միացումը բազային
        db = getDb()
    } else {
        console.log('Db connection error');  
    }
})


app.get('/', (req, res) => {
    res.send('Hello World!')
})

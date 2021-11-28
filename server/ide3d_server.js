const express = require('express')
const user_session = require("./user_session.js")

const app = express()
let html_port = 4567
let base_folder = __dirname + "/../"
// console.log(base_folder)
app.use( express.urlencoded({ extended: true }) )
app.use( express.json() )
app.post('/login',function(req, res){
    console.log()

    let user = req.body.user
    user_session.add(user,user)
    res.cookie('user', user,  
    {
        maxAge: 24 * 60 * 60,
        httpOnly: true, // You can't access these tokens in the client's javascript=        
        secure: process.env.NODE_ENV === 'production'? true: false // Forces to use https in production
    });
    // console.log(req.user)
    // console.log(req.password)
    res.send({act:'logged'})
    // res.send('yo')
})

app.post('/amilogged',function(req, res){
    console.log("amilogged")

    if((user_data = user_session.logged(req, res)) !== undefined){
        console.log(user_data);
        res.send({act:'logged', as: user_data.user})
    }
})

app.use(express.static(`${base_folder}/html`))
app.listen(html_port, () => {
  console.log(`Example app listening at http://localhost:${html_port}`)
})

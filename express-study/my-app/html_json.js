const express = require('express')

const app = express()

let name = 'Anandh'
let password = 12345

// http  - get put post delete
// app.get(route,calback(request,response))

app.get('/', (req, res) => {
    res.write('<h1>Login to move forward<h1>')
    res.write('<h1>Login to move forward<h1>')  // sending the html data
    res.send()

})// here what happening is we are sending a request to the route to send as back this response
//login page

app.use(loginmiddleware) // we are calling the middleware here,then after login page we need to pass the middleware function then we can access the profile and feed page

app.get('/profilepage', (req, res) => {
    res.json([{
        firstname: 'Tomy',
        lastname: 'Joy'
    },
    {
        firstname: 'Tomy',
        lastname: 'Joy'
    }])
})

app.get('/feedpage', (req, res) => {
    res.send('feed page')
})



app.listen(8000, () => {
    console.log('port running on 8000')
})


function loginmiddleware(req, res, next) {
    if (name == 'Anandh' && password == '12345') {
        next()
    }
    else {
        res.send('Authentication failed')
    }
}




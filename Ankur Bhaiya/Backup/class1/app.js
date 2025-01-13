const express = require('express')
const app = express()

app.set('view engine' , 'ejs');
app.get('/', (req,res)=>{
    // const data =new Date()
    // res.render('index');  

    // const formateDate = `${data.getDate() + '-' + data.getMonth() + '-' + data.getFullYear()}`;  // passing data to index.ejs
    // console.log(formateDate)
    // res.render('index', {date: formateDate})   // passing data to index.ejs via ejs template engine      ejs - <%= date %>

    // pasing objects
    const person = [{
        name: "John Doe",
        age: 25,
        city: "New York",
        image:"https://preview.redd.it/is-this-the-best-panel-in-naruto-v0-ezc3da6ucoce1.jpeg?width=1080&crop=smart&auto=webp&s=b0bfef872ee714ca65d17640f4a4e57194a1bc3a"
    },
    {
        name: "JOKER Doe",
        age: 25,
        city: "New York",
             image:"https://preview.redd.it/is-this-the-best-panel-in-naruto-v0-ezc3da6ucoce1.jpeg?width=1080&crop=smart&auto=webp&s=b0bfef872ee714ca65d17640f4a4e57194a1bc3a"
    },
]

    res.render('index', {date :person})  // passing data to index.ejs via ejs template engine      ejs - <%= person.name %>  <%= person.age %>  <%= person.city %>

})
app.get('*', (req,res)=>{
res.render('notFound')
})
app.listen(3000, ()=>{
    console.log("SERVER is started on  port 3000")
})
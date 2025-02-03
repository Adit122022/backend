const app = require('./src/app')
const connectToDb = require('./src/db/db')

connectToDb()

app.listen(8000,()=>{
    console.log(`Server is running on port 8000`)
})

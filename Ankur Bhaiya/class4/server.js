const app = require('./src/app');
require('./src/db/db')
app.listen(3000,()=> {
    console.log('listening on port 3000')
})
const app = require('./src/app');
const connectToDB = require('./src/db/db');

// Connect to the database
connectToDB();

app.listen(3000,() =>{ console.log('listening on port 3000')})
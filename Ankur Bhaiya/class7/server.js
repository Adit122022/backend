const app = require('./app');

const connect = require('./db/db');

connect();
// 
app.listen(3000, () => {
    console.log('Server is running on port 3000');  // Server is listening on port 3000
});
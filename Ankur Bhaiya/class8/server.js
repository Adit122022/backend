const app = require('./src/app');
const connect = require('./src/db/db');

connect();

app.listen(4000, () => {
    console.log('Server is running on port 4000');  // Server is listening on port 3000
});
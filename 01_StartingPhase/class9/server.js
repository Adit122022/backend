const dotenv = require('dotenv')

dotenv.config();  // Load environment variables from.env file
const app = require('./src/app');
const connect = require('./src/db/db');


connect();

app.listen(process.env.PORT, () => {
    console.log('Server is running on port 4000');  // Server is listening on port 3000
});
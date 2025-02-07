require('dotenv').config()
const config = require('./src/config/config');
const app = require('./src/app');
const connect = require('./src/db/db');

connect();

app.listen(config.PORT, () => {
    console.log('🙉🙉Server is running on port ->,', config.PORT ,'🙉🙉');  // Server is listening on port 3000
});

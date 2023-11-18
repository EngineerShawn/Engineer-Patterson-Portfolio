const path = require('path');
require('dotenv').config({ path: '../.env' });

const secretData = {
    token : process.env.NOVA_BOT_TOKEN,
    client_id : process.env.CLIENT_ID,
    client_secret : process.env.CLIENT_SECRET,
    endpoint : process.env.DISCORD_API_ENDPOINT,
    redirect : process.env.REDIRECT_URI,
    port : process.env.PORT
};

module.exports = secretData;

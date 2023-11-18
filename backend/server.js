/**
 *  =========================================================
*   NovaAI - Discord Bot - v1.0.0
    =========================================================
 * 
* Product Page: (https://novaai.engineerpatterson.com)
* Copyright 2023 engineerpatterson.com (https://www.engineerpatterson.com/)
* Licensed under MIT (https://github.com/EngineerShawn/NovaAICrossPlatform/tree/main/NovaAI-Discord/LICENSE.md)

* Design and Coded by Shawn Pattesron (EngineerPatterson)
 * 
 * 
 * 
 * Server for Discord OAuth2 Request and POST
 * 
 */

const express = require('express');
const axios = require('axios');
const app = express();
const secretData  = require('./secretData.js');


console.log(token);

// ------------------------------------------------------
// -------- Discord Access Token Auth Request -----------
// ------------------------------------------------------

function getSecretValue(key) {
    return secretData[key] || `No secret value found for ${key}` 
}






app.get('/oauth2/callback', async (req, res) => {
    const code = req.query.code;
    if (!code) {
        res.status(400).send('Code not found');
        return;
    }

    try {
        const response = await axios.post('https://discord.com/api/oauth2/token', new URLSearchParams({
            client_id: secretData.clientID,
            client_secret: secretData.secret,
            grant_type: 'authorization_code',
            code: code,
            redirect_uri: 
        }), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });

        // Here you can use response.data.access_token to make further API calls
        res.send('Successfully authenticated');
    } catch (error) {
        console.error('Error exchanging code:', error);
        res.status(500).send('Internal Server Error');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

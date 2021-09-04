const dotenv = require('dotenv');

dotenv.config();


const sid = process.env.SID || ''

const authToken = process.env.AUTH_TOKEN || ''


module.exports = {
    sid,
    authToken
}
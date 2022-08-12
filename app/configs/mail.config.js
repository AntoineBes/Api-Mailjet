const mailjet = require('node-mailjet')
const config = require("./key.config.js");
const mail = mailjet.apiConnect(
    config.MAILJET_PUBLIC_KEY,
    config.MAILJET_SECRET_KEY,
    {
        config: {},
        options: {}
    }
)
module.exports = {
    mail
}
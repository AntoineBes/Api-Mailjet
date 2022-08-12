const controller = require("../controllers/mail.controller");
module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "Authorization, Origin, Content-Type, Accept",
        );
        next();
    });
    app.post(
        "/api/mail/send", [],
        controller.SendMail
    );
}
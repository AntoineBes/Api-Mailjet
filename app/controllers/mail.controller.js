const { mail } = require("../configs/mail.config.js");

exports.SendMail = async (req, res) => {
    const request = mail
        .post('send', { version: 'v3.1' })
        .request({
            Messages: [
                {
                    From: {
                        Email: "send@mail.com",
                        Name: "John"
                    },
                    To: [
                        {
                            Email: "recip@mail.com",
                            Name: "Alan"
                        }
                    ],
                    Subject: "Reset Password",
                    HTMLPart: `<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <title>My Mail</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex, nofollow">
</head>

<body style="width:100%; max-width:600px; margin:auto">
  <h1 style="color: #333">Hello World</h1>
</body>

</html>`
                }
            ]
        })

    request
        .then((result) => {
            res.status(200).send({ message: 'Mail successfully send' });
        })
        .catch((err) => {
            res.status(500).send({ message: err.message });
        })
}
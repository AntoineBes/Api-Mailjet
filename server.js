const express = require("express");
const cors = require("cors");
const app = express();

var corsOptions = {
    origin: "*"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

require('./app/routes/mail.routes')(app);
const PORT = process.env.PORT || 3307;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
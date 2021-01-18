let express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;


app.use(function (req, res) {
    res.status(404).send({url: req.originalUrl + "Constants.APP_MESSAGE.NOT_FOUND_ERROR"})
});

app.listen(port);

console.log('server started on: ' + port);

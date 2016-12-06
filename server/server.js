var http = require('http'),
    app = require('./config/express'),
    db = require('./config/database');

app.set('port', process.env.PORT || 3000);

http.createServer(app).listen(app.get('port'), function() {
    console.log('Servidor escutando na porta: ' + this.address().port);
});


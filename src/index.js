const app = require('./server');
var port = process.env.PORT || 8000;
app.listen(port, () => console.log('server listening on port 8080'));
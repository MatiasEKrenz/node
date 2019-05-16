var http = require('http');
//var rs = require('./modulo'); // esta es la forma para poder importar un modulo (libreria)
//var url = require('url');
//var fs = require('fs');
//var url = require('url');
//var uc = require('upper-case');
var fs = require('fs');
var events = require('events');
var eventEmitter = new events.EventEmitter();

var handler = function() {
    console.log('Se disparó el evento');
};

eventEmitter.on('evento', handler);

http.createServer( function (req, res) {
        /*
        var q = url.parse(req.url, true).query;
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('Hola ' + q.nombre + ' ' + q.apellido);
        res.end();
        */


       /* fs.readFile('archivo.html', function (err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        })*/

      /* fs.open('archivo1.txt', 'w', function (err, fd) {

           console.log('Terminado');
           res.end();
       });
       */
        //nombre de funciones del fs.
        //apenfile
        //readfile
        //delete

        /*var q = url.parse(req.url, true);
        var f = '.' + q.pathname;
        fs.readFile(f, function (err, data) {
            if(err) {
                res.writeHead(404, {'Content-Type': 'text/html'});
                return res.end("404 Not Found");
            }

            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        });
        */

        /*res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(uc('Hola MercadoLibre'));
        res.end();
        */

        /*var rs = fs.createReadStream('./archivo1.txt');
        rs.on('open', function () {
            console.log('El archivo esta abierto.');
        });
        res.end();

         */

        eventEmitter.emit('evento');
        res.end();
    }
).listen(8080);


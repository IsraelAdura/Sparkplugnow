var formidable = require('formidable');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var fs = require('fs');

module.exports.upload = function () {
    app.post('/fileupload', urlencodedParser, function (req, res) {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            var oldpath = files.filetoupload.path;
            var newpath = '/Users/GIDILOUNGE/Desktop/' + files.fileupload.name;
            fs.rename(oldpath, newpath, function (err) {
                if (err) throw err;
                res.render('success');
            })
        })
    })
}
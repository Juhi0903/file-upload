const IncomingForm = require('formidable').IncomingForm;
// var form = require (formidable.IncomingForm());
// app.use(express.bodyParser());
const fs = require('fs');
var path = require("path");

module.exports = function upload(req, res) {
    var form = new IncomingForm();

form.on('file',(field, files) => {
    var oldpath = files.path;
    var newpath = '/home/juhi/Documents/Upload/file-upload/' + files.name;
    console.log("oldpath>>>>> " +oldpath);
    console.log("newpath>>>>> " +newpath);
    fs.rename(oldpath, newpath,(err)=> {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      });
});
form.on('end', () => {
    res.json();
});
form.parse(req);
};
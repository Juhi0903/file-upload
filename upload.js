const IncomingForm = require('formidable').IncomingForm;
const fs = require('fs');
var path = require("path");
var sizeLimitBytes  = 2000;

module.exports = function upload(req, res,next) {
    var form = new IncomingForm();

form.on('file',(field, files) => {
    var oldpath = files.path;
     var size = req.headers['content-length'] +  'bytes';
    var newpath = '/home/juhi/Documents/Upload/file-upload/' + files.name;
    fs.rename(oldpath, newpath,(err)=> {
        if (err) throw err;
        // if(parseInt(size) > parseInt(sizeLimitBytes)){
        //     console.log("here");
        //     res.status(404).json({status:'size limit'});
        //  }
        //  else{
        //      console.log(sizeLimitBytes);
            res.status(200).json({status:'file uploaded'});
         
       
      });
});
// form.on('end', () => {
//     res.json();
// });


form.parse(req);
};
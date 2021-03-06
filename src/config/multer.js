const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

module.exports = {
    //.resolve() provides a standard solution for paths
    dest : path.resolve( __dirname, "..", "..", "temp"),
    //storage will be local
    storage : multer.diskStorage(
    {
        destination : (req, file, callBack) => {
            callBack(null, path.resolve(__dirname, "..", "..", "temp"));
        },

        filename : (req, file, callBack) => {
            crypto.randomBytes(16, (err, hash) => {
                if (err) callBack(err);
                file.key = `${hash.toString("hex")} - ${file.originalname}`;

                callBack(null, file.key);
            });
        } 
    })
};
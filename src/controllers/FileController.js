const File = require("../models/File");
const StorageBox = require("../models/StorageBox");

class FileController {
    async store(req, res){
        const storage = await StorageBox.findById(req.params.id);
        const file = await File.create({
           title : req.file.originalname,
           path : req.file.key 
        });

        //Save file to storagebox
        storage.files.push(file);
        await storage.save();

        //Room socket
        //req.io.sockets.in(storage._id).emit("file", file);

        return res.json(file);
    }
}

module.exports = new FileController();
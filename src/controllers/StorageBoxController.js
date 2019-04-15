const StorageBox = require('../models/StorageBox');

class StorageBoxController
{
    async store(req, res) {
        const box = await StorageBox.create( {title : req.body.title});
        return res.json(box);
    }
    async show(req, res) {
        const box = await StorageBox.findById(req.params.id).populate('files');
        return res.json(box)
    }
}

module.exports = new StorageBoxController();
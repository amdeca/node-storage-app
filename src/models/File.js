const mongoose = require('mongoose');

const File = new mongoose.Schema(
    {
        title : {
            type : String,
            required : true
        },
        path : {
            type : String,
            required : true
        }, 
    }, 
    {
        timestamps : true, 
        toObjetct : {virtuals : true},
        toJSON : {virtuals : true}
    }
);

File.virtual("url").get(function (){
    const dinamicURL = process.env.URL || 'http://localhost:5555';
    return `http:localhost:3333/files/${encodeURIComponent(this.path)}`;
});

module.exports = mongoose.model('File', File);
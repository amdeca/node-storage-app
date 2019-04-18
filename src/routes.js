const express = require('express');
const multer = require('multer');
const multerConfig = require("./config/multer");
const routes = express.Router();

const StorageBoxController = require('./controllers/StorageBoxController');
const FileController = require('./controllers/FileController');

routes.post("/storage", StorageBoxController.store);
routes.get("/storage/:id", StorageBoxController.show);

//.single('file') used to admit a single file per upload
routes.post("/storage/:id/files", multer(multerConfig).single('file'), FileController.store);

module.exports = routes;
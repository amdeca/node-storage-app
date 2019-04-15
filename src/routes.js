const express = require('express');
const multer = require('multer');
const multerConfig = require("./config/multer");
const routes = express.Router();

const StorageBoxController = require('./controllers/StorageBoxController');
const FileController = require('./controllers/FileController');

routes.post("/boxes", StorageBoxController.store);
routes.get("/boxes/:id", StorageBoxController.show);

//.single('file') used to admit a single file per upload
routes.post("/boxes/:id/files", multer(multerConfig).single('file'), FileController.store);

module.exports = routes;
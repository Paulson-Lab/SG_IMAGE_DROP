const express = require('express');
    const multer = require('multer');
    const path = require('path');
    const cors = require('cors');
    const fs = require('fs');

    const app = express();
    app.use(cors());
    app.use(express.static('public'));
    app.use(express.json());

    const storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, 'images/');
      },
      filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
      }
    });

    const upload = multer({ storage: storage }).array('images');

    app.post('/upload', (req, res) => {
      upload(req, res, (err) => {
        if (err) {
          return res.status(400).send('Error uploading files');
        }
        if (!req.files || req.files.length === 0) {
          return res.status(400).send('No files uploaded.');
        }
        res.send(`${req.files.length} file(s) uploaded successfully`);
      });
    });

    app.get('/images', (req, res) => {
      const imagesDir = path.join(__dirname, 'images');
      fs.readdir(imagesDir, (err, files) => {
        if (err) {
          return res.status(500).send('Unable to scan images');
        }
        res.json(files);
      });
    });

    app.delete('/images/:filename', (req, res) => {
      const filePath = path.join(__dirname, 'images', req.params.filename);
      fs.unlink(filePath, (err) => {
        if (err) {
          return res.status(500).send('Error deleting file');
        }
        res.send('File deleted successfully');
      });
    });

    app.put('/images/:filename', (req, res) => {
      const oldPath = path.join(__dirname, 'images', req.params.filename);
      const newPath = path.join(__dirname, 'images', req.body.newFilename);
      
      fs.rename(oldPath, newPath, (err) => {
        if (err) {
          return res.status(500).send('Error renaming file');
        }
        res.send('File renamed successfully');
      });
    });

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

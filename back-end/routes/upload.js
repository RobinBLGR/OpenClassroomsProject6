const express = require('express');
const router = express.Router();
const multer = require('../multer-config');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

router.post('/upload', multer.single('image'), (req, res) => {
  const { originalname, mimetype, buffer } = req.file;
  const { name: fileName, ext: fileExtension } = path.parse(originalname);

  // Génération du nouveau nom de fichier basé sur le nom donné et la date actuelle
  const dateNow = Date.now();
  const newFileName = `${fileName}_${dateNow}${fileExtension}`;

  // Chemin du dossier de destination pour les images originales
  const originalImagePath = path.join(__dirname, '../images', newFileName);

  // Chemin du dossier de destination pour les images optimisées
  const optimizedImagePath = path.join(__dirname, '../images/optimized', newFileName);

  // Enregistrement de l'image originale
  fs.writeFileSync(originalImagePath, buffer);

  // Traitement de l'image avec Sharp
  sharp(originalImagePath)
    .resize(206, 206)
    .toFormat('webp')
    .toFile(optimizedImagePath, (err, info) => {
      if (err) {
        // Suppression de l'image originale en cas d'erreur
        fs.unlinkSync(originalImagePath);
        return res.status(500).send('Erreur lors de la conversion de l\'image.');
      }

      // Suppression de l'image originale
      fs.unlink(originalImagePath, (err) => {
        if (err) {
          console.log('Erreur lors de la suppression de l\'image originale :', err);
        }
      });

      res.send(optimizedImagePath);
    });
});

module.exports = router;
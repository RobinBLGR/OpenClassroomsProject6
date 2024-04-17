const sharp = require('sharp');
const fs = require('fs');

const optimizeImage = (req, res, next) => {
  if (!req.file){
    return next();
  }
  const imagePath = req.file.path;
  const optimizedImagePath = imagePath.replace(/\.[^/.]+$/, '.webp');

  sharp(imagePath)
    .resize(405, 456)
    .toFormat('webp')
    .toFile(optimizedImagePath)
    .then(() => {
      fs.unlink(imagePath, (unlinkErr) => {
        if (unlinkErr) {
          console.error(unlinkErr);
        }
      });

      req.file.path = optimizedImagePath;
      next();
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({ error: "Une erreur est survenue lors de l'optimisation de l'image." });
    });
};

module.exports = optimizeImage;
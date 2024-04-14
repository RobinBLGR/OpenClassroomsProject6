const sharp = require('sharp');
const fs = require('fs');

const optimizeImage = (req, res, next) => {

  const imagePath = req.file.path;
  const optimizedImagePath = imagePath.replace(/\.[^/.]+$/, '.webp');
  
  sharp(imagePath)
    .resize(405, 456)
    .toFormat('webp')
    .toFile(optimizedImagePath, (err, info) => {
      if (err) {
        console.error(err);
        // Gérer l'erreur (par exemple, afficher un message d'erreur à l'utilisateur)
        return res.status(500).json({ error: "Une erreur est survenue lors de l'optimisation de l'image." });
      }

      // Supprimez l'image originale
      fs.unlink(imagePath, (unlinkErr) => {
        if (unlinkErr) {
          console.error(unlinkErr);
          // Gérer l'erreur (par exemple, afficher un message d'erreur à l'utilisateur)
        } else {
          console.log('Image originale supprimée avec succès');
        }
      });

      // Mettez à jour le chemin de l'image optimisée dans la requête
      req.file.path = optimizedImagePath;
      next();
    });
};

module.exports = optimizeImage;
const fs = require('fs');

exports.processImage = (req, res, next) => {
  if (!req.file) {
    return next();
  }

  // Renommer l'image avec une date unique
  const currentDate = moment().format('YYYYMMDDHHmmss');
  const fileName = `${currentDate}_${req.file.originalname}`;
  const fileBuffer = req.file.buffer;

  // Chemin vers le dossier de destination
  const destinationPath = `images/206x260/${fileName}`;

  sharp(fileBuffer)
    .resize(206, 260)
    .toFormat('webp')
    .toFile(destinationPath, (error) => {
      if (error) {
        res.status(400).json({ error: 'Une erreur est survenue lors du traitement de l\'image.' });
      } else {
        // Supprimer le fichier original du dossier images
        fs.unlink(req.file.path, (error) => {
          if (error) {
            console.log('Une erreur est survenue lors de la suppression du fichier d\'origine :', error);
          }
        });

        // Mettre à jour l'objet de requête avec les informations de l'image traitée
        req.file.path = destinationPath;
        req.file.filename = fileName;
        req.file.destination = 'images/206x260';

        next();
      }
    });
};
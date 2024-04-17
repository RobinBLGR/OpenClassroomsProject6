const Book = require('../models/book');
const fs = require('fs');

exports.createBook = (req, res, next) => {
  const bookObject = JSON.parse(req.body.book);
  delete bookObject.id;
  delete bookObject.userId;
  const book = new Book({
      ...bookObject,
      userId: req.auth.userId,
      imageUrl: `${req.protocol}://${req.get('host')}/${req.file.path}`
  });

  book.save()
  .then(() => { res.status(201).json({message: 'Livre enregistré !'})})
  .catch(error => { res.status(400).json( { error })})
};

exports.modifyBook = (req, res, next) => {
  const bookObject = req.file ? {
      ...JSON.parse(req.body.book),
      imageUrl: `${req.protocol}://${req.get('host')}/${req.file.path}`
  } : { ...req.body };

  delete bookObject._userId; // Si cette suppression est intentionnelle et ne cause pas de problèmes ailleurs dans votre application

  Book.findOne({ _id: req.params.id })
      .then((book) => {
        if (!book) {
          return res.status(404).json({ message: 'Livre non trouvé' });
        }
        if (book.userId !== req.auth.userId) {
          return res.status(403).json({ message: 'Non autorisé' }); // Utilisation de 403 Forbidden pour les erreurs d'autorisation
        }
        
        // Suppression de l'ancienne image uniquement si une nouvelle image est téléchargée
        if (req.file && book.imageUrl) {
          const filename = book.imageUrl.split('/images/')[1];
          fs.unlink(`images/${filename}`, (err) => {
            if (err) {
              console.error('Erreur lors de la suppression de l\'ancienne image :', err);
            }
          });
        }

        return Book.updateOne({ _id: req.params.id }, { ...bookObject, _id: req.params.id })
          .then(() => res.status(200).json({ message: 'Livre modifié !' }))
          .catch(error => res.status(500).json({ message: 'Une erreur est survenue lors de la modification du livre' }));
      })
      .catch((error) => {
          res.status(500).json({ message: 'Une erreur est survenue lors de la recherche du livre' });
      });
};



exports.deleteBook = (req, res, next) => {
  Book.findOne({ _id: req.params.id})
      .then(book => {
          if (book.userId != req.auth.userId) {
              res.status(401).json({message: 'Non autorisé'});
          } else {
              const filename = book.imageUrl.split('/images/')[1];
              fs.unlink(`images/${filename}`, () => {
                  Book.deleteOne({_id: req.params.id})
                      .then(() => { res.status(200).json({message: 'Livre supprimé !'})})
                      .catch(error => res.status(401).json({ error }));
              });
          }
      })
      .catch( error => {
          res.status(500).json({ error });
      });
};

  exports.getOneBook = (req, res, next) => {
    Book.findOne({ _id: req.params.id })
      .then(book => res.status(200).json(book))
      .catch(error => res.status(404).json({ error }));
  };

  exports.getAllBooks = (req, res, next) => {
    Book.find()
      .then(books => res.status(200).json(books))
      .catch(error => res.status(400).json({ error }));
  };

  exports.rateBook = (req, res, next) => {
    const { userId, rating } = req.body;
  
    Book.findOne({ _id: req.params.id })
      .then((book) => {
        if (!book) {
          return res.status(404).json({ message: 'Livre non trouvé.' });
        }
  
        if (book.ratings.some((r) => r.userId.toString() === userId)) {
          return res.status(400).json({ message: 'Vous avez déjà noté ce livre' });
        }
  
        book.ratings.push({ userId, grade: rating });
  
        const averageRating = book.ratings.reduce((acc, curr) => acc + Number(curr.grade), 0) / book.ratings.length;
        // Arrondir la moyenne au dixième supérieur
        book.averageRating = Math.ceil(averageRating * 10) / 10;
  
        book.save()
          .then(() => res.status(200).json(book))
          .catch(error => res.status(500).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
};


  exports.getBestBooks = async (req, res, next) => {
    try {
      const bestBooks = await Book.find()
        .sort({ rating: -1 }) // Trie les livres par ordre décroissant de la note
        .limit(3); // Limite les résultats aux trois premiers livres
  
      res.status(200).json(bestBooks);
    } catch (error) {
      res.status(500).json({ error });
    }
  };

  exports.getBestRatedBooks = (req, res, next) => {
    Book.find()
    .sort({ averageRating: -1 })
    .limit(3)
    .then((bestRatedBooks) => {
        res.status(200).json(bestRatedBooks);
    })
    .catch((error) => {
        res.status(500).json({ error: 'Internal Server Error'});
    });
}
  
const bcrypt = require('bcrypt');

const plaintextPassword = 'test'; // Remplacez par le mot de passe que vous souhaitez crypter

// Générer un sel (salt)
const saltRounds = 10; // Le nombre de tours de hachage, plus il est élevé, plus le hachage est sécurisé
bcrypt.genSalt(saltRounds, (err, salt) => {
  if (err) {
    console.error('Erreur lors de la génération du sel :', err);
  } else {
    // Utiliser le sel pour hacher le mot de passe
    bcrypt.hash(plaintextPassword, salt, (err, hash) => {
      if (err) {
        console.error('Erreur lors du hachage du mot de passe :', err);
      } else {
        console.log('Mot de passe haché :', hash);
      }
    });
  }
});

const jwt = require("jsonwebtoken");
require("dotenv").config();

const { SECRET_KEY } = process.env;

// Middleware d'authentification utilisant un token JWT
module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1]; // Extraction du token de l'en-tête "Authorization" et suppression du préfixe "Bearer "
    const decodedToken = jwt.verify(token, SECRET_KEY); // Décodage du token en utilisant la clé secrète pour vérifier son authenticité
    const { userId } = decodedToken;
    req.auth = { userId }; // Ajout des informations d'authentification à l'objet "req" pour les middleware ultérieurs
    next();
  } catch (error) {
    res.status(401).json({ error });
  }
};

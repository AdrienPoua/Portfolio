const nodemailer = require('nodemailer');
const Contact = require('../models/contact');
const { CONTACT_EMAIL, CONTACT_PASSWORD } = process.env;

exports.sendMessage = async (req, res) => {
    const formData = req.body;

    // Créez un objet de transporteur pour l'envoi d'e-mails (configurez les informations de votre serveur de messagerie)
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com', // Serveur SMTP de Gmail
        port: 465, // Port SMTP sécurisé de Gmail
        secure: true, // Utilisez SSL/TLS pour une connexion sécurisée
        auth: {
            user: CONTACT_EMAIL, // Utilisez la variable d'environnement CONTACT_EMAIL
            pass: CONTACT_PASSWORD, // Utilisez la variable d'environnement CONTACT_PASSWORD
        },
    });

    // Options de l'e-mail
    const mailOptions = {
        from: CONTACT_EMAIL, // Utilisez la variable d'environnement CONTACT_EMAIL comme adresse d'expéditeur
        to: CONTACT_EMAIL, // Adresse e-mail du destinataire (peut également être une variable d'environnement si nécessaire)
        subject: 'Formulaire de contact Portfolio, de ' + formData.email,
        text: `Email: ${formData.email}\nMessage: ${formData.message}`,
    };

    try {
        // Envoyer l'e-mail
        await transporter.sendMail(mailOptions);

        // Enregistrez les données dans la base de données (utilisez votre modèle Contact)
        const contact = new Contact({
            email: formData.email,
            message: formData.message,
            date: formData.date,
        });
        await contact.save();

        // Envoyez une réponse au client
        res.status(200).send(
            'Le formulaire a été soumis avec succès.'
        );
    } catch (error) {
        console.error(
            "Erreur lors de l'envoi de l'e-mail :",
            error
        );
        res.status(500).send(
            "Une erreur s'est produite lors de la soumission du formulaire."
        );
    }
};

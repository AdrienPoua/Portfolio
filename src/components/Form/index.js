import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';

export default function Form({isSubmit, setIsSubmit}) {
    const [formData, setFormData] = useState({
        email: '',
        message: '',
        date : new Date()
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
            date : new Date()
        });
    };

    useEffect(() => {
        console.log('Données du formulaire :', formData)
    }, [formData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmit(true);
        
        fetch('http://localhost:3000/api/portfolio/contact', {
          method: 'POST', // Spécifiez la méthode HTTP
          headers: {
            'Content-Type': 'application/json', // Définissez le type de contenu de la requête
          },
          body: JSON.stringify(formData), // Convertissez l'objet formData en chaîne JSON
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error('Erreur réseau');
            }
            return response.json();
          })
          .then((data) => {
            console.log('Réponse de la requête :', data);
          })
          .catch((error) => {
            console.error('Erreur de requête :', error);
          });
      };
      
return (
    <>
      <form
        className='d-flex flex-column'
        onSubmit={handleSubmit}
      >
        <label
          className='mb-1'
          htmlFor='email'
        >
          Email
        </label>
        <input
          className='p-2 rounded mb-3'
          type='email'
          id='email'
          name='email'
          placeholder='john@doe.fr'
          required
          value={formData.email}
          onChange={handleChange}
        />
        <label
          className='mb-1'
          htmlFor='message'
        >
          Message
        </label>
        <textarea
          className='p-2 mb-4 rounded'
          id='message'
          name='message'
          placeholder='Que souhaitez-vous dire ?'
          rows='4'
          required
          value={formData.message}
          onChange={handleChange}
        />
        <Button
          variant='secondary'
          className='w-50 m-auto'
          type='submit'
        >
          Envoyer
        </Button>

      </form>
      </>
  );
}
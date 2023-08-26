import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import './contact-form.css'

const schema = yup.object().shape({
  firstName: yup.string().required('Prénom obligatoire').matches(/^[A-Za-zÀ-ÿ\-\'\s]+$/, 'Format incorrect'),
  lastName: yup.string().required('Nom obligatoire').matches(/^[A-Za-zÀ-ÿ\-\'\s]+$/, 'Format incorrect'),
  email: yup.string().required('Email obligatoire').email('Format incorrect'),
  phone: yup.string().matches(/^\+?[0-9]*$/, 'Format incorrect'),
  message: yup.string().required('Veuillez ajouter un message'),
});

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    // Remplacez cette ligne par la logique d'envoi réelle
  };

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="form-line">
          <label htmlFor="firstName" className='form-label'>Prénom</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="form-input"
            placeholder="Julien"
            {...register('firstName')}
          />
          {errors.firstName && (
            <div className="form-error">{errors.firstName.message}</div>
          )}
        </div>

        <div className="form-line">
          <label htmlFor="lastName" className='form-label'>Nom</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="form-input"
            placeholder="Lefevre"
            {...register('lastName')}
          />
          {errors.lastName && (
            <div className="form-error">{errors.lastName.message}</div>
          )}
        </div>
        <div className="form-line">
          <label htmlFor="email" className='form-label'>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-input"
            placeholder="julien.lefevre@example.com"
            {...register('email')}
          />
          {errors.email && (
            <div className="form-error">{errors.email.message}</div>
          )}
        </div>
        <div className="form-line">
          <label htmlFor="phone" className='form-label'>Téléphone (facultatif)</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="form-input"
            placeholder="+33123456789"
            {...register('phone')}
          />
          {errors.phone && (
            <div className="form-error">{errors.phone.message}</div>
          )}
        </div>
        <div className="form-line">
          <label htmlFor="message" className='form-label'>Message</label>
          <textarea
            id="message"
            name="message"
            className="form-input"
            placeholder="Bonjour Julien, ..."
            {...register('message')}
          />
          {errors.message && (
            <div className="form-error">{errors.message.message}</div>
          )}
        </div>
        <button type="submit" className="form-button">
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
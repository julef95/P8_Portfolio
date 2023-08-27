import Tag from '../Tag/tag';

import React, { useState } from 'react';
import Modal from 'react-modal';
import { useTranslation } from 'react-i18next';

import './card.css';

function Card({ title, mainImage, description, tags, link, photos }) {
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (e) => {
        e.stopPropagation();
        console.log("Open modal is called");
        setIsModalOpen(true);
    };

    const closeModal = (e) => {
        e.stopPropagation();
        console.log("Close modal is called");
        setIsModalOpen(false);
    };

    return (
        <div className='home-portfolio-card' onClick={openModal}>
            <img src={mainImage.src} alt={mainImage.title} className="card-main-image" />
            <p className="card-title">{t(title)}</p>

            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                className="card-modal"
                overlayClassName="modal-overlay"
                appElement={document.getElementById('root')}
                >

                <button onClick={closeModal} className='card-modal-button'><i class="fa-solid fa-xmark"></i></button>
               
                <div className='card-modal-content'>
                    <h2 className='card-modal-title'>{t(title)}</h2>
                    <ul className='card-modal-description'>
                        {description.map((description, index) => (
                                <li key={index}>{t(description)}</li>
                        ))}
                    </ul>
                    <p>{t('Difficultés rencontrées')} : -</p>
                    <div className='card-modal-tags'>
                        <p>{t('Technologies employées :')} </p>
                        <Tag tags={tags} />
                    </div>
                    <div className='card-modal-link'>
                        <p>{t('Lien Github :')} </p>
                        <a href="{link}">{link}</a>
                    </div>
                </div>

                <div className='card-modal-photos'>
                    <div className='card-modal-photos-container'>
                        {photos.map((photos, index) => (
                            <img key={index} src={photos.src} alt={photos.alt} className="card-modal-photo" />
                        ))}
                    </div>
                </div>

                {/* Ajoutez d'autres éléments comme additionalImages */}
                
            </Modal>
        </div>
    );
}

export default Card;
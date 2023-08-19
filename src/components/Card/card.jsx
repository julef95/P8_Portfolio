import React, { useState } from 'react';
import Modal from 'react-modal';
import './card.css';

function Card({ title, mainImage, description, technologies, additionalImages }) {
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
            <p className="card-title">{title}</p>

            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                className="modal"
                overlayClassName="modal-overlay"
                appElement={document.getElementById('root')}
            >
                <h2>{title}</h2>
                <img src={mainImage} alt={title} />
                <p>{description}</p>
                <ul>
                    {technologies.map((tech, index) => (
                        <li key={index}>{tech}</li>
                    ))}
                </ul>
                {/* Ajoutez d'autres éléments comme additionalImages */}
                <button onClick={closeModal}>Fermer</button>
            </Modal>
        </div>
    );
}

export default Card;
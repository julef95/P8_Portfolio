import Header from '../../components/Header/header'
import ReactTyped from "react-typed"
import {projects} from '../../datas/projects'
import Collapse from '../../components/Collapse/collapse'
import Card from '../../components/Card/card'
import ContactForm from '../../components/ContactForm/contact-form'
import './home.css';

function Home() {
    return (
        <div className='home-body'>
            <div className='home-header'>
                <Header />
            </div>

            <div className='home-welcome-page' id='home-anchor'>
                <div className='home-welcome-page-content'>
                    <h1>Julien Lefevre</h1>
                    <ReactTyped strings={["Développeur web"]} typeSpeed={100} loop className='home-welcome-page-content-p' />
                </div>
            </div>

            <div className='home-about' id='about-anchor'>
                <div className='home-about-content'>
                    <h2>À propos de moi</h2>
                    <p>Je suis développeur web fullstack depuis 2023 après un début de carrière en Finance.</p>
                    <Collapse title='En savoir plus sur mon parcours' content={["J'ai obtenu mon master en finance à l'université Paris-Dauphine en 2020 en ayant effectué des stages au sein des plus grandes banques en France et à l'étranger et un échange d'un semestre aux USA.", 
                    "C'est durant mon stage de fin d'études dans une startup nommée Okarito que j'ai découvert le métier de développeur.", 
                    "Après un premier CDI de deux ans en tant qu'analyste financier au sein d'une société de gestion, j'ai décidé de me former au développement web en suivant une formation intensive de six mois.", 
                    "Je possède aujourd'hui le titre de Développeur intégrateur web et j'ai déjà développé plusieurs projets en utilisant des technologies telles que <b>Javascript</b>, React, Node.js, Express et Mongoose."
                    ]} />
                    <div className='home-about-content-interests'>
                        <div>
                            <h3>Ce que j'aime dans le métier de développeur :</h3>
                            <ul>
                                <li>Le challenge intellectuel</li>
                                <li>L'impact concret et direct</li>
                                <li>Rencontrer des entrepreneurs</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Ce qui m'intéresse dans la vie :</h3>
                            <ul>
                                <li>Les voyages</li>
                                <li>L'investissement</li>
                                <li>L'éducation et l'orientation</li>
                            </ul>
                        </div>
                    </div>
                    <div className='home-about-content-anecdotes'>
                        <h3>Quelques anecdotes :</h3>
                        <ul>
                            <li>J'ai cofondé deux startups : une dans le domaine de l'orientation scolaire grâce à la réalité virtuelle et l'autre dans l'investissement en crypto-monnaies.</li>
                            <li>J'ai une âme d'aventurier mais je tombe toujours malade durant mes voyages.</li>
                        </ul>  
                    </div>
                </div>
            </div>

            <div className='home-services' id='services-anchor'>
                <div className='home-services-content'>
                    <h2>Prestations</h2>
                
                </div>
            </div>

            <div className='home-portfolio' id='portfolio-anchor'>
                <div className='home-portfolio-content'>
                    <h2>Mon portefeuille</h2>
                    <div className='home-portfolio-projects'>
                        {projects.map((project, index) => (
                            <Card key={index} {...project} />
                        ))}
                    </div>
                </div>
            </div>

            <div className='home-contact' id='contact-anchor'>
                <div className='home-contact-content'>
                    <h2>Contactez-moi</h2>
                    <ContactForm />
                </div>
            </div>

            <div className='home-footer'>

            </div>
        </div>
    )
}

export default Home
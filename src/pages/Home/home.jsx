import Header from '../../components/Header/header'
import Collapse from '../../components/Collapse/collapse'
import Card from '../../components/Card/card'
import CardService from '../../components/CardService/card-service'
import ContactForm from '../../components/ContactForm/contact-form'

import {projects} from '../../datas/projects'

import ReactTyped from "react-typed"
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';

import './home.css';

function Home() {
    const { t, i18n } = useTranslation();
    return (
        <div className='home-body'>
            <div className='home-header'>
                <Header />
            </div>

            <div className='home-welcome-page' id='home-anchor'>
                <div className='home-welcome-page-content'>
                    <h1>Julien Lefevre</h1>
                    <ReactTyped strings={[t("Développeur full-stack")]} typeSpeed={100} loop className='home-welcome-page-content-p' />
                    <div className='welcome-page-buttons'>
                        <Link to='contact-anchor' smooth={true} duration={500} className='welcome-page-button'>{t('Me contacter')}</Link>
                        <div className='github-button'>
                            <a href='https://github.com/julef95?tab=repositories' className='welcome-page-button' target="_blank" rel="noopener noreferrer">
                            <img src="./assets/images/Github.png" alt='Logo Github' className='github-logo' />Github</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='home-about' id='about-anchor'>
                <div className='about-photo-container'>
                    <img src="./assets/images/photo_me.jpg" alt="Julien Lefevre" className='photo-me' />
                </div>
                <div className='home-about-content'>
                    <div className='home-about-title'>
                        <h2>{t('À propos de moi')}</h2>
                        <a href="https://www.linkedin.com/in/julien-lefevre/"><img src="./assets/images/Linkedin.webp" alt='Logo Linkedin' className='links-logo' /></a>
                    </div>
                    <p>{t('Je suis développeur web fullstack depuis 2023 après un début de carrière en Finance.')}</p>
                    <Collapse title='En savoir plus sur mon parcours' content={["J'ai obtenu mon master en finance à l'université Paris-Dauphine en 2020 en ayant effectué des stages au sein des plus grandes banques en France et à l'étranger et un échange d'un semestre aux USA.", 
                    "C'est durant mon stage de fin d'études dans une startup nommée Okarito que j'ai découvert le métier de développeur.", 
                    "Après un premier CDI de deux ans en tant qu'analyste financier au sein d'une société de gestion, j'ai décidé de me former au développement web en suivant une formation intensive de six mois chez Openclassrooms. Je possède aujourd'hui le titre de Développeur intégrateur web et j'ai déjà développé plusieurs projets en utilisant des technologies telles que <b>Javascript</b>, React, Node.js, Express.js et Mongoose."
                    ]} />
                    <div className='home-about-links'>
                        <p>{t('Téléchargez mon CV')} <a href={i18n.language === 'fr' ? '/assets/resume/CV Julien Lefevre.pdf' : '/assets/resume/Julien Lefevre resume.pdf'} download>{t('ici')}</a>.</p>
                    </div>
                    <div className='home-about-content-interests'>
                        <div>
                            <h3>{t("Ce que j'aime dans le métier de développeur :")}</h3>
                            <ul>
                                <li>{t('Le challenge intellectuel')}</li>
                                <li>{t("L'impact concret et direct")}</li>
                                <li>{t('Rencontrer des entrepreneurs')}</li>
                            </ul>
                        </div>
                        <div>
                            <h3>{t('Ce qui m\'intéresse dans la vie :')}</h3>
                            <ul>
                                <li>{t('Les voyages')}</li>
                                <li>{t("L'investissement")}</li>
                                <li>{t('L\'éducation et l\'orientation')}</li>
                            </ul>
                        </div>
                    </div>
                    <div className='home-about-content-anecdotes'>
                        <h3>{t('Quelques anecdotes :')}</h3>
                        <ul>
                            <li>{t('J\'ai cofondé deux startups : une dans le domaine de l\'orientation scolaire grâce à la réalité virtuelle et l\'autre dans l\'investissement en crypto-monnaies.')}</li>
                            <li>{t('J\'ai une âme d\'aventurier mais je tombe toujours malade durant mes voyages.')}</li>
                        </ul>  
                    </div>
                </div>
            </div>

            <div className='home-services' id='services-anchor'>
                <div className='home-services-content'>
                    <h2>{t('Mes services')}</h2>
                    <div className='home-services-frontend'>
                        <div className='services-card-container'>
                            <CardService title="Sites web et mobile" logo="./assets/images/landing_page2.png" content="Développe des sites et applications accessibles sur ordinateurs, tablettes et mobiles." />
                            <CardService title="Expérience utilisateur" logo="./assets/images/design.png" content="Une expérience fluide et magnifique pour vos clients." />
                            <CardService title="Optimisation" logo="./assets/images/optimization.png" content="Code optimisé pour de meilleures performances, un meilleur SEO et une meilleure accessibilité." />
                        </div>

                        <h3>{t('Technologies maitrisées :')}</h3>
                        <div className='services-logo-container'>
                            <img src="./assets/images/HTMLCSS.png" alt="logo HTML CSS" className='services-logo' />
                            <img src="./assets/images/JavaScript.png" alt="logo JavaScript" className='services-logo' />
                            <img src="./assets/images/ReactJS.png" alt="logo ReactJS" className='services-logo' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='home-portfolio' id='portfolio-anchor'>
                <div className='home-portfolio-content'>
                    <h2>{t('Mon portefeuille')}</h2>
                    <div className='home-portfolio-projects'>
                        {projects.map((project, index) => (
                            <Card key={index} {...project} />
                        ))}
                    </div>
                    <div className='portfolio-github-link'>
                        <img src="./assets/images/Github.png" alt='Logo Github' className='github-logo' />
                        <p>{t('Lien Github :')} <a href="https://github.com/julef95?tab=repositories">https://github.com/julef95?tab=repositories</a></p>
                    </div>
                </div>
            </div>

            <div className='home-contact' id='contact-anchor'>
                <div className='home-contact-content'>
                    <div>
                        <h2>{t('Contactez-moi')}</h2>
                        <div className='home-contact-details-deskstop'>
                            <p>Email : lefevreju@hotmail.fr</p>
                            <div className='contact-linkedin'>
                                <a href="https://www.linkedin.com/in/julien-lefevre/"><img src="./assets/images/Linkedin.webp" alt='Logo Linkedin' className='links-logo' /></a>
                                <p> : https://www.linkedin.com/in/julien-lefevre/</p>
                            </div>
                        </div>
                    </div>
                    <ContactForm />   
                    <div className='home-contact-details-mobile'>
                            <p>Email : lefevreju@hotmail.fr</p>
                            <div className='contact-linkedin'>
                                <a href="https://www.linkedin.com/in/julien-lefevre/"><img src="./assets/images/Linkedin.webp" alt='Logo Linkedin' className='links-logo' /></a>
                                <p className='linkedin-url'> : https://www.linkedin.com/in/julien-lefevre/</p>
                            </div>
                        </div> 
                </div>
            </div>

            <div className='home-footer'>

            </div>
        </div>
    )
}

export default Home
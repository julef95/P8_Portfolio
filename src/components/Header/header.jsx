import { useState } from 'react'; // Importez useState
import { Link } from 'react-scroll';
import Scrollspy from 'react-scrollspy';
import { useTranslation } from 'react-i18next';

import './header.css';

function Header() {
    const { t, i18n } = useTranslation();

    const [showMobileNav, setShowMobileNav] = useState(false); // State pour la navigation mobile

    const changeLanguage = (lng) => {
        console.log('Change language called:', lng);
        i18n.changeLanguage(lng);
    };

    const toggleMobileNav = () => {
        setShowMobileNav(!showMobileNav);
    };

    return (
        <header className='header'>
            <div className='header-title'>
                <h1>Julien Lefevre</h1>
            </div>

            <nav className={`header-nav-links ${showMobileNav ? 'mobile-nav-active' : ''}`}>
                <Scrollspy 
                    items={['home-anchor', 'about-anchor', 'services-anchor', 'portfolio-anchor', 'contact-anchor']}
                    currentClassName='nav-link-active'
                    offset={-100}
                    className='nav-links-container'>
                        <li><Link to='home-anchor' smooth={true} duration={500}>{t('Accueil')}</Link></li>
                        <li><Link to='about-anchor' smooth={true} duration={500}>{t('À propos de moi')}</Link></li>
                        <li><Link to='services-anchor' smooth={true} duration={500}>{t('Mes services')}</Link></li>
                        <li><Link to='portfolio-anchor' smooth={true} duration={500}>{t('Mon portefeuille')}</Link></li>
                        <li><Link to='contact-anchor' smooth={true} duration={500}>{t('Contactez-moi')}</Link></li>
                </Scrollspy>
                <button onClick={() => changeLanguage(i18n.language === 'fr' ? 'en' : 'fr')} className='button-language'>
                    <img src={`/assets/images/${i18n.language === 'fr' ? 'UK.png' : 'FR.png'}`} alt={`Drapeau ${i18n.language === 'fr' ? 'anglais' : 'français'}`} className='icon-flag' />
                    <div className='button-language-text'>{i18n.language === 'fr' ? 'English' : 'Français'}</div>
                </button>
            </nav>
            
            {/* Bouton pour afficher les liens sur mobile */}
            <button onClick={toggleMobileNav} className='mobile-nav-button'>
                <span className={`burger-icon ${showMobileNav ? 'open' : ''}`}>&#9776;</span>
            </button>
        </header>
    );
}

export default Header;
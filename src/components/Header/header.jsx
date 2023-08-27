import { Link } from 'react-scroll'
import Scrollspy from 'react-scrollspy'
import { useTranslation } from 'react-i18next'

import './header.css';

function Header() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        console.log('Change language called:', lng);
      i18n.changeLanguage(lng);
    };

    return (
        <header className='header'>
            <div className='header-title'>
                <h1>Julien Lefevre</h1>
            </div>

            <nav className='header-nav-links'>
                <Scrollspy
                    items={['home-anchor', 'about-anchor', 'services-anchor', 'portfolio-anchor', 'contact-anchor']}
                    currentClassName='nav-link-active'
                    offset={-100}>
                        <li><Link to='home-anchor' smooth={true} duration={500}>{t('Accueil')}</Link></li>
                        <li><Link to='about-anchor' smooth={true} duration={500}>{t('À propos de moi')}</Link></li>
                        <li><Link to='services-anchor' smooth={true} duration={500}>{t('Mes services')}</Link></li>
                        <li><Link to='portfolio-anchor' smooth={true} duration={500}>{t('Mon portefeuille')}</Link></li>
                        <li><Link to='contact-anchor' smooth={true} duration={500}>{t('Contactez-moi')}</Link></li>
                </Scrollspy>
                {i18n.language === 'fr' ? (
                    <button onClick={() => changeLanguage('en')} className='button-language'><img src="/assets/images/UK.png" alt='Drapeau anglais' className='icon-flag' />English</button>
                ) : (
                    <button onClick={() => changeLanguage('fr')} className='button-language'><img src="/assets/images/FR.png" alt='Drapeau français' className='icon-flag' />Français</button>
                )}
            </nav>   
        </header>
    )
}

export default Header
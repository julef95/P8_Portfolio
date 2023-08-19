import { Link } from 'react-scroll';
import './header.css';

function Header() {
    return (
        <header className='header'>
            <div className='header-title'>
                <h1>Julien Lefevre</h1>
            </div>

            <nav className='header-nav-links'>
                <ul>
                    <li><Link to='home-anchor' smooth={true} duration={500}>Accueil</Link></li>
                    <li><Link to='about-anchor' smooth={true} duration={500}>À propos de moi</Link></li>
                    <li><Link to='services-anchor' smooth={true} duration={500}>Prestations</Link></li>
                    <li><Link to='portfolio-anchor' smooth={true} duration={500}>Mon portefeuille</Link></li>
                    <li><Link to='contact-anchor' smooth={true} duration={500}>Contactez-moi</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
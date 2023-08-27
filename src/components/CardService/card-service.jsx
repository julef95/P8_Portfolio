import { useTranslation } from 'react-i18next';

import './card-services.css';

function CardService ({ title, logo, content }){
    const { t } = useTranslation();
    return (
        <div className="services-card">
            <img src={logo} alt={t(title)} className="services-card-logo" />
            <div className='services-card-description'>
                <h2 className="services-card-title">{t(title)}</h2>
                <p className="services-card-content">{t(content)}</p>
            </div>
        </div>
    )
}

export default CardService;
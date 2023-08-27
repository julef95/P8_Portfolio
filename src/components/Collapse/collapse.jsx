import { useState } from 'react'
import { useTranslation } from 'react-i18next';

import './collapse.css'

function Collapse({ title, content }) {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
  
    const handleToggle = () => {
      setIsOpen(!isOpen);
    };
  
    return (
        <div className={`collapse ${isOpen ? 'open' : ''}`}>
            <div className="collapse-header">
                <p className='collapse-title'>{t(title)}</p>
                {isOpen ? (
                <i className="fa-solid fa-minus" onClick={handleToggle}></i>
                ) : (
                <i className="fa-solid fa-plus" onClick={handleToggle}></i>
                )}
            </div>

            {isOpen && (
                <div className="collapse-content">
                    {Array.isArray(content) ? (content.map((item, index) => (
                    <div key={index} dangerouslySetInnerHTML={{ __html: t(item) }} className='collapse-paragraph'></div>))) : (<div dangerouslySetInnerHTML={{ __html: t(content) }} className='collapse-paragraph'></div>)}
                 </div>
            )}
        </div>
    );
}
  
export default Collapse;
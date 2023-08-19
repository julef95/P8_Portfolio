import { useState } from 'react'
import flecheBas from '../../assets/fleche_bas.png'
import flecheHaut from '../../assets/fleche_haut.png'
import './collapse.css'

function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);
  
    const handleToggle = () => {
      setIsOpen(!isOpen);
    };
  
    return (
        <div className="collapse">
            <div className="collapse-header">
                <p className='collapse-title'>{title}</p>
                {isOpen ? (
                <img
                    src={flecheHaut}
                    alt="Flèche Haut"
                    className="arrow"
                    onClick={handleToggle}
                />
                ) : (
                <img
                    src={flecheBas}
                    alt="Flèche Bas"
                    className="arrow"
                    onClick={handleToggle}
                />
                )}
            </div>

            {isOpen && (
                <div className="collapse-content">
                    {Array.isArray(content) ? (content.map((item, index) => (
                    <div key={index} dangerouslySetInnerHTML={{ __html: item }} className='collapse-paragraph'></div>))) : (<div dangerouslySetInnerHTML={{ __html: content }} className='collapse-paragraph'></div>)}
                 </div>
            )}
        </div>
    );
}
  
export default Collapse;
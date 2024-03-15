// React imports
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

// Card
export default function Card({ img, title, siteLink, repoLink, subtitle }) {
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="card">
            {hovered ? (
                <div>
                    <img src={img} alt={title} className='cardImage'></img>
                    <div className='hoverInfo'>
                        <h5>
                            <a href={siteLink} target="_blank" rel="noopener noreferrer" className='cardTitle'>{title}</a>
                        </h5>
                        <div>
                            <a href={repoLink} target="_blank" rel="noopener noreferrer" className="repoLink">
                                <FontAwesomeIcon icon={faGithub} /></a>
                        </div>
                        <p className='cardSubtitle'>{subtitle}</p>
                    </div>
                </div>
            ) : (
                <div>
                    <img src={img} alt={title} className='cardImage'></img>
                </div>
            )}
        </div>
    );
}
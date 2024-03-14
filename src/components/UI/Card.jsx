// React imports
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

// Card
export default function Card({ img, title, siteLink, repoLink, subtitle }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div className="card" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <div className="cardImage" style={{ backgroundImage: `url(${img})` }}></div>
            {hovered && (
                <div className="cardDetails">
                    <h2 className="cardTitle">
                        <a href={siteLink} target="_blank" rel="noopener noreferrer">{title}</a>
                    </h2>
                    <div className="cardLink">
                        <a href={repoLink} target="_blank" rel="noopener noreferrer" className="repoLink">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>
                    <p className="cardSubtitle">{subtitle}</p>
                </div>
            )}
        </div>
    );
}
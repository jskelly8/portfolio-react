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
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {hovered ? (
                <div>
                    <img src={img}></img>
                    <div>
                        <h5>
                            <a href={siteLink} target="_blank" rel="noopener noreferrer">{title}</a>
                        </h5>
                        <div>
                            <a href={repoLink} target="_blank" rel="noopener noreferrer" className="repoLink">
                                <FontAwesomeIcon icon={faGithub} /></a>
                        </div>
                        <p>{subtitle}</p>
                    </div>
                </div>
            ) : (
                <div>
                    <img src={img}></img>
                </div>
            )}
        </div>
    );
}
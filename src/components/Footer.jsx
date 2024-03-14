// React imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faSlack } from '@fortawesome/free-brands-svg-icons';

// Footer
export default function Footer() {
    // Define your profile URLs
    const githubUrl = "https://github.com/jskelly8";
    const linkedinUrl = "https://www.linkedin.com/in/jess-nichole-skelton";
    const slackUrl = "https://vuvirtfsfpt10-fwx1318.slack.com/team/U060LPK5ZB2";

    return (
        <footer className="footer-container">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href={slackUrl} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faSlack} size="2x" />
            </a>
        </footer>
    );
};
// React Imports
import { useState } from 'react';

// Resume Page
export default function ResumePage() {
    // Technical skills section
    // States for accordion toggle
    const [isFrontendOpen, setIsFrontendOpen] = useState(false);
    const [isBackendOpen, setIsBackendOpen] = useState(false);

    // Technical skills split into Front-end and Back-end
    const frontendSkills = [
        'React.js', 'JavaScript', 'jQuery', 'Bootstrap', 'CSS', 'HTML', 'HTML5', 'Apollo Client', 'Redux'
    ];
    const backendSkills = [
        'Node / Node.js', 'Express / Express.js', 'SQL / MySQL', 'Sequelize (ORM)', 'NoSQL', 'MongoDB', 'Mongoose',
        'GraphQL', 'Apollo Server', 'bcrypt', 'JWT', 'AWS', 'NGINX', 'S3', 'EC2', 'DynamoDB'
    ];

    // Toggle functions for each category
    const toggleFrontend = () => setIsFrontendOpen(!isFrontendOpen);
    const toggleBackend = () => setIsBackendOpen(!isBackendOpen);

    // Other experience section
    const otherExperience = [
        {
            title: 'SFPP Senior Account Representative',
            company: 'State Farm Mutual Automobile Insurance Company',
            location: 'Murfreesboro, TN',
            dates: '2019 – 2023',
            responsibilities: [
                'Managed complex customer inquiries and resolved billing and technical issues, enhancing communication between State Farm agents, staff, and customers through multiple channels including email, IM, and phone.',
                'Demonstrated exceptional problem-solving skills by handling advanced billing corrections, processing complex transactions, and contributing to production needs with a focus on accuracy and efficiency.',
                'Excelled in a remote work environment, consistently exceeding performance expectations through strong focus and dedication to job responsibilities.',
                'Recognized for outstanding customer service with numerous certificates and bonuses, and selected to pilot new software solutions, showcasing adaptability and technical proficiency.'
            ]
        },
        {
            title: 'Customer Advocate I',
            company: 'AAA',
            location: 'Nashville, TN',
            dates: '2017 – 2019',
            responsibilities: [
                'Provided immediate roadside assistance to members, demonstrating excellent customer service and data entry skills by efficiently setting up service calls.',
                'Maintained top performance in statistical metrics through effective time management, ensuring quick and friendly support in critical situations.',
                'Received numerous commendations for outstanding service, underscoring reliability and the ability to communicate effectively with service providers to coordinate member support.'
            ]
        },
        {
            title: 'Front Desk Agent',
            company: 'Home2 Suites by Hilton',
            location: 'Clarksville, TN',
            dates: '2017 – 2017',
            responsibilities: [
                'Provided exceptional guest services, efficiently resolving complaints and inquiries by leveraging deep knowledge of corporate and company policies.',
                'Skillfully managed communication through various channels including incoming calls, email correspondence, and confidential information, while maintaining updated records and files.',
                'Expanded expertise across multiple departments to enhance overall guest support and operational efficiency.',
                'Recognized for excellence with multiple Employee of the Month awards and entrusted with training new Front Desk staff and supporting hotel openings.'
            ]
        }
    ];

    // Page
    return (
        <main className="resumeContainer">
            <h1 id="top">My Resume</h1>
            <p className="jumpTo">
                Jump to: <a href="#skills">Technical Skills</a> | <a href="#experience">Other Experience</a> | <a href="#education">Education</a>
            </p>
            <p className="download">Download my <a href="https://drive.google.com/uc?export=download&id=1pxUSGHD5GPt44qkCSZAbFUNMaE8rKXie" download>resume</a></p>
            <div className="resume">
                <div id="skills">
                    <h3>Technical Skills</h3>
                    <p className="jumpTo">Click the category to view related skills</p>
                    <button className="accordion-button" onClick={toggleFrontend} aria-expanded={isFrontendOpen}>Front-end Technologies</button>
                    {isFrontendOpen && (
                        <ul>
                            {frontendSkills.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    )}
                    <button className="accordion-button" onClick={toggleBackend} aria-expanded={isBackendOpen}>Back-end Technologies</button>
                    {isBackendOpen && (
                        <ul>
                            {backendSkills.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    )}
                </div>
                <div id="experience">
                    <h3>Other Experience</h3>
                    {otherExperience.map((job, index) => (
                        <div key={index}>
                            <h4>{job.title}</h4>
                            <p>{job.company}, {job.location}</p>
                            <p>{job.dates}</p>
                            <ul>
                                {job.responsibilities.map((responsibility, index) => (
                                    <li key={index}>{responsibility}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div id="education">
                    <h3>Education</h3>
                    <dl>
                        <dt>Vanderbilt Full Stack Web Development</dt>
                        <dd>Vanderbilt - Nashville, TN</dd>
                        <dt>Associates of Science</dt>
                        <dd>Hopkinsville Community College - Hopkinsville, KY</dd>
                    </dl>
                    <p>Back to <a href="#top">Top</a></p>
                </div>
            </div>
        </main>
    );
};
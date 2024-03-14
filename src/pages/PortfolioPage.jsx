// React Imports
import Card from './components/UI/Card';

// Portfolio Page  -----------------style later
export default function PortfolioPage() {
    // Hooks and Retrivals if needed
    // Data for projects
    const projects = [
        {
            img: '/images/blog.jpeg',
            title: 'Tech Blog',
            siteLink: 'https://tech-blog-ch-fce07de2de9a.herokuapp.com/',
            repoLink: 'https://github.com/jskelly8/tech-blog',
            subtitle: 'Node.js, Express, MySQL'
        },
        {
            img: '/images/ttt.jpeg',
            title: 'TableTop Ties',
            siteLink: 'https://desolate-coast-16417-f21d4a060ca1.herokuapp.com/',
            repoLink: 'https://github.com/Gerlach0130/tabletop-ties',
            subtitle: 'React, Node.js, MongoDB'
        },
        {
            img: '/images/jate.jpeg',
            title: 'JATE',
            siteLink: 'https://text-editor-4xfd.onrender.com',
            repoLink: 'https://github.com/jskelly8/pwa-text-editor',
            subtitle: 'React, PWA'
        },
        {
            img: '/images/quiz.jpeg',
            title: 'Timed Quiz',
            siteLink: 'https://jskelly8.github.io/timed-quiz/',
            repoLink: 'https://github.com/jskelly8/timed-quiz',
            subtitle: 'HTML, CSS, JavaScript'
        },
        {
            img: '/images/weather.jpeg',
            title: 'Weather Dashboard',
            siteLink: 'https://jskelly8.github.io/weather-dashboard/',
            repoLink: 'https://github.com/jskelly8/weather-dashboard',
            subtitle: 'JavaScript, API'
        },
        {
            img: '/images/note.jpeg',
            title: 'Note Taker',
            siteLink: 'https://jess-note-taker-5e8a79bae927.herokuapp.com/',
            repoLink: 'https://github.com/jskelly8/note-taker',
            subtitle: 'Node.js, Express, JavaScript'
        }
    ];

    // Page
    return (
        <main className="container">
            <div className="portImg">
                <img src="path_to_image" alt="Project" />
            </div>
            <div className="portIntro">
                <h1>My Projects</h1>
                <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis at tellus at urna condimentum mattis pellentesque id nibh. Eu non diam phasellus vestibulum lorem sed risus ultricies tristique. Porttitor leo a diam sollicitudin tempor id eu nisl nunc. Accumsan lacus vel facilisis volutpat.</p>
            </div>
            <div className="portCards">
                {projects.map((project, index) => (
                    <Card
                        key={index}
                        img={project.img}
                        title={project.title}
                        siteLink={project.siteLink}
                        repoLink={project.repoLink}
                        subtitle={project.subtitle}
                    />
                ))}
            </div>
        </main>
    );
}
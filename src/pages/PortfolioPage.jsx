// React Imports
import Card from '../components/UI/Card.jsx';

// Portfolio Page
export default function PortfolioPage() {
    // Hooks and Retrivals 

    // Data for projects
    const projects = [
        {
            img: '/images/blog.jpeg',
            title: 'Tech Blog',
            siteLink: 'https://tech-blog-ch-fce07de2de9a.herokuapp.com/',
            repoLink: 'https://github.com/jskelly8/tech-blog',
            subtitle: 'MySQL, Express, Node.js'
        },
        {
            img: '/images/ttt.jpeg',
            title: 'TableTop Ties',
            siteLink: 'https://desolate-coast-16417-f21d4a060ca1.herokuapp.com/',
            repoLink: 'https://github.com/Gerlach0130/tabletop-ties',
            subtitle: 'Socket.io, MySQL, Handlebars'
        },
        {
            img: '/images/jate.jpeg',
            title: 'JATE',
            siteLink: 'https://text-editor-4xfd.onrender.com',
            repoLink: 'https://github.com/jskelly8/pwa-text-editor',
            subtitle: 'IndexedDB, Webpack, JS'
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
            subtitle: 'JavaScript, 3rd party API'
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
            <img src="/images/BubblesWide.jpg" alt="Abstract bubbles" className="portImg" />
            <div className="portIntro">
                <h1>My Projects</h1>
                <p className="paragraph">Welcome to my web development portfolio, where creativity meets functionality. As a dedicated software engineer, I've crafted a collection of projects that showcase my expertise in modern web development. From dynamic React applications to efficient Node.js servers, each project demonstrates my commitment to delivering innovative solutions.</p>
                <p className="paragraph">Notably, this site itself is a prime example of my proficiency in React development. With its intuitive user experience and seamless integration with modern web standards, it serves as a testament to my skills.</p>
                <p className="paragraph">Explore my portfolio to discover a diverse range of projects, each highlighting my proficiency in front-end and back-end development. Whether it's a responsive website, a robust web application, or a scalable API, I'm dedicated to delivering excellence in every project.</p>
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
// React Imports

// Home Page
export default function HomePage() {
    // Hooks and Retrivals if needed

    // Page
    return (
        <main className="container">
            <img src="/images/FullLogoWide.jpg" alt="My Logo Large" className="homeImg"></img>
            <div className="photoContainer">
                <img className="photo" src="/images/MeCropped.png" alt="Photo of Jess Skelton"></img>
            </div>
            <div className="nameTitle">
                <h1>Jess Skelton</h1>
                <h3>Software Engineer</h3>
            </div>

            <div className="paragraph">
                <p>As a dedicated web developer, I bring a blend of passion and proficiency to every project. With a knack for rapid learning and a deep understanding of modern technologies such as JavaScript, Node.js, React, and MySQL, I thrive in creating and enhancing web applications. My commitment to staying at the forefront of industry trends ensures that I deliver innovative solutions that exceed expectations. Ready to tackle challenges head-on and elevate your digital presence, I am poised to contribute effectively to your team's success.</p>
            </div>
            <div className="homeContact">
                <h5>Let's connect! <a href="/contact">Contact Me</a></h5>
            </div>
        </main>
    );
};
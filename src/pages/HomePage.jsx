// React Imports

// Home Page  -----------------style later
export default function HomePage() {
    // Hooks and Retrivals if needed

    // Page
    return (
        <main className="container">
            <img src="/images/FullLogoWide.jpg" alt="My Logo Large" className="homeImg"></img>

            <div >
                <img className="photo"></img>
            </div>

            <div className="nameTitle">
                <h1>Jess Skelton</h1>
                <h3>Software Engineer</h3>
            </div>

            <div className="paragraph">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="homeContact">
                <h5>Let's connect! <a href="#contact">Contact Me</a></h5>
            </div>
        </main>
    );
};
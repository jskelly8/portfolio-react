// React Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMobileAlt, faLocationDot } from '@fortawesome/free-solid-svg-icons';

// Contact Page  -----------------style later
export default function ContactPage() {
    // Hooks and Retrivals if needed

    // Page
    return (
        <main className="contactContainer">
            <div className="contactInfo">
                <div className="contactIntro">
                    <h3>Get In Touch</h3>
                    <h1>Let's Connect And Create</h1>
                    <p>Ready to bring your ideas and needs to life? Let's work together to build something amazing.</p>
                    <div className="email">
                        <p><FontAwesomeIcon icon={faEnvelope} className='icon' /> jessskelton888@gmail.com</p>
                    </div>
                    <div className="phone">
                        <p><FontAwesomeIcon icon={faMobileAlt} className='icon' /> 931-401-0523</p>
                    </div>
                </div>
                <div className="location">
                    <h5>Location</h5>
                    <p><FontAwesomeIcon icon={faLocationDot} className='icon' /> Murfreesboro, TN, USA</p>
                </div>
                <div className="hours">
                    <h5>Hours</h5>
                    <table>
                        <tbody>
                            <tr>
                                <td>Monday</td>
                                <td>9:00 AM - 7:00 PM</td>
                            </tr>
                            <tr>
                                <td>Tuesday</td>
                                <td>9:00 AM - 7:00 PM</td>
                            </tr>
                            <tr>
                                <td>Wednesday</td>
                                <td>9:00 AM - 7:00 PM</td>
                            </tr>
                            <tr>
                                <td>Thursday</td>
                                <td>9:00 AM - 7:00 PM</td>
                            </tr>
                            <tr>
                                <td>Friday</td>
                                <td>9:00 AM - 7:00 PM</td>
                            </tr>
                            <tr>
                                <td>Saturday</td>
                                <td>9:00 AM - 7:00 PM</td>
                            </tr>
                            <tr>
                                <td>Sunday</td>
                                <td>9:00 AM - 7:00 PM</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="contactForm">
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone:</label>
                        <input type="tel" id="phone" name="phone" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" required />
                    </div>
                    <p>*Note: Currently this form does not function, Coming soon</p>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </main>
    );
};
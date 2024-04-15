// React Imports
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMobileAlt, faLocationDot } from '@fortawesome/free-solid-svg-icons';

// Contact Page
export default function ContactPage() {
    // State for form field validation
    const [errors, setErrors] = useState({});

    // Function to handle form field validation
    const handleValidation = (fieldName, value) => {
        if (!value.trim()) {
            setErrors(prevErrors => ({
                ...prevErrors,
                [fieldName]: 'This field is required',
            }));
        } else if (fieldName === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const isValidEmail = emailRegex.test(value);
            setErrors(prevErrors => ({
                ...prevErrors,
                email: isValidEmail ? '' : 'Please enter a valid email address',
            }));
        } else {
            setErrors(prevErrors => ({
                ...prevErrors,
                [fieldName]: '',
            }));
        }
    };

    // Page
    return (
        <main className="contactContainer">
            <img src='/images/sphereWide.jpg' alt='Sphere in middle of swirls'></img>
            <div className="contactInfo">
                <div className="contactIntro">
                    <h3>Contact Me</h3>
                    <h1>Join Forces and Innovate</h1>
                    <p>Eager to turn your concepts and requirements into reality? Collaborate with me to create something extraordinary.</p>
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
                                <td>12:00 PM - 7:00 PM</td>
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
                                <td>10:00 AM - 3:00 PM</td>
                            </tr>
                            <tr>
                                <td>Sunday</td>
                                <td>10:00 AM - 7:00 PM</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="contactForm">
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            onBlur={(e) => handleValidation('name', e.target.value)}
                        />
                        {errors.name && <p className="error">{errors.name}</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            onBlur={(e) => handleValidation('email', e.target.value)}
                        />
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone:</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            onBlur={(e) => handleValidation('phone', e.target.value)}
                        />
                        {errors.phone && <p className="error">{errors.phone}</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            onBlur={(e) => handleValidation('message', e.target.value)}
                        />
                        {errors.message && <p className="error">{errors.message}</p>}
                    </div>
                    <p>*Note: Currently this form does not function, Coming soon</p>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </main>
    );
};
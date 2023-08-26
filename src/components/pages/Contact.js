import React from 'react';
import '../../App.css';
import '../Contact.css';

function Contact() {
  return (
    <div> 
      <h1 className='contact'>CONTACT US!</h1>
      <div className='contact-page'>
        <div className='contact-container'>
          <div className='location-container'>
            <h2>Location</h2>
            <div className='map-wrapper'>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d201911.66332737566!2d-122.31429778923845!3d37.74620005476819!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1693030119391!5m2!1sen!2sus" 
                width='100%'
                height='300'
                style={{ border: 0 }}
                allowFullScreen=''
                loading='lazy'
                title='Google Map'
              ></iframe>
            </div>
          </div>
          <div className='contacts-list-container'>
            <h2>All Contacts</h2>
            <ul className='contacts-list'>
              <li className='contact-item'>
                <h3>Company contacts</h3>
                <p>Email: contact@bullseyebio.com</p>
                <p>Phone: (650) 223-5810</p>
                <p>Address: San Francisco Bay Area, California, USA</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

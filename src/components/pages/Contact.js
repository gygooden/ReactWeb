import React from 'react';
import '../../App.css';
import '../Contact.css';

function Contact() {
  return (
    <div className='contact-container'>
      <h1 className='contact'>CONTACTS</h1>
      <div className='map-container'>
        <h2>Location</h2>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d244813.72103026212!2d-122.23187043653246!3d37.728154656718615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1692315101738!5m2!1sen!2sus'
          width='100%'
          height='300'
          style={{ border: 0 }}
          allowFullScreen=''
          loading='lazy'
          title='Google Map'
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;

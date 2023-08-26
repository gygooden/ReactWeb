import React from 'react';
import './Footer.css';
import { Button } from './Button';
import Contact from './pages/Contact';
import { Link } from 'react-router-dom';

function Footer() {
{/*Footer creates universal footer template applied evenly to all web pages*/}
const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSc0bSlBx8iksQYxNLSAPjVf4u49mTyFLEi9EIqzfMpGXDamkA/viewform?usp=sf_link'; {/*Interchangeable google form/external link for visitor information*/}
  const openGoogleForm = () => {
    window.open(googleFormUrl, '_blank');
  };

  return (
      <div className='footer-container'>
        <section className='footer-subscription'>
          <p className='footer-subscription-heading'>
            Join our email list for more updates
          </p>
          <p className='footer-subscription-text'>
            You can unsubscribe at any time
          </p>
          <div className='input-areas'>
          <form>
          <Button buttonStyle='btn--outline' onClick={openGoogleForm}>
            Subscribe
          </Button>
          </form>
          </div>
        </section>
        
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/'>Terms of Service</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Careers</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <a
              href='mailto:contact@bullseyebio.com' 
              target='_blank'
              aria-label='Contact'
            >
             Email us
            </a>
            <a
              href='mailto:contact@bullseyebio.com' // Can be altered to a support email
              target='_blank' 
              aria-label='Contact'
            >
             Support
            </a>
            <Link to='/contact'>
              More contact info
            </Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>How we operate</Link>
            <Link to='/'>Recent projects</Link>
            <Link to='/'>Presentations</Link>
            <Link to='/'>Influencer</Link>
          </div>

          {/*
          <div class='footer-link-items'> // This code implements an additional social media section where links can be included
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
          */}

        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Bullseye Bio
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>Bullseye Biotechnologies, Inc © 2023</small>
          <div class='social-icons'>

            {/*
            // Insert this code to add facebook icon (no link attached)
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            */}

            <a
              class='social-icon-link instagram' 
              href='https://www.instagram.com/bullseyebiotech/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </a>
            <a
              class='social-icon-link twitter' 
              href='https://twitter.com/bullseyebio' 
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </a>
              <a
                class='social-icon-link linkedin' 
                href='https://www.linkedin.com/company/bullseyebio/'
                target='_blank'
                aria-label='LinkedIn'
              >
            <i class='fab fa-linkedin' />
          </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
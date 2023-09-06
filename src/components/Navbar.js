import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import logoImage from '../images/Bullseye.png'
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSc0bSlBx8iksQYxNLSAPjVf4u49mTyFLEi9EIqzfMpGXDamkA/viewform?usp=sf_link'; {/*Interchangeable google form/external link for visitor information*/}

  const openGoogleForm = () => {
    window.open(googleFormUrl, '_blank');
    closeMobileMenu(); // Close the mobile menu after clicking the link
  };

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src={logoImage} alt="Bullseye Bio Logo" className="logo-image" />
          </Link>
          
          {/*}
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Bullseye Bio
            <i class='fab fa-typo3' />
          </Link>
        */}
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>

            <li className='nav-item'>
              <Link to='/' 
                className='nav-links' 
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/mission'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Mission
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/organoids'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Organoids
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/publications'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Publications
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/team'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Team
              </Link>
            </li>

            <li>
              <Link
                to='#'
                className='nav-links-mobile'
                onClick={openGoogleForm} // Interchangeable signup external link, also replaceable at top
              >
                Sign Up
              </Link>
            </li>

          </ul>
          {button && (
            <Button buttonStyle='btn--outline' onClick={openGoogleForm}>
              SIGN UP
            </Button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
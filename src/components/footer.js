import React from 'react';

function Footer() {
    return (
        <div className='img-link'>
        <div className="social-links-footer" id="footer">
           
            <a href="https://www.linkedin.com/in/nataliateaca/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>
          <a href="https://github.com/natka58" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>
          <a href="http://facebook.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-facebook-square" aria-hidden="true" />
          </a> 
          </div>
            <p className='footer-info'>
                &copy; N. Teaca<a href="https://github.com/natka58" />
            </p>
           
        </div>
    )
}

export default Footer;
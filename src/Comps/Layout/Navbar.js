import React from 'react';

const Navbar = () => {
  return (
    <nav style={{ marginBottom: '30px' }} className='light-blue darken-3'>
      <div className='nav-wrapper'>
        <a
          href='https://www.youtube.com/watch?v=zVvdjlgHAag'
          class='brand-logo'
        >
          <img src='/Images/Logo.jpg' alt='Logo' width='45' height='Auto' />
        </a>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/About'>About</a>
          </li>
          <li>
            <a href='/ContactMe'>Contact me</a>
          </li>
          <a
            className='dropdown-trigger btn light-blue darken-3'
            data-target='dropdown1'
            href='#'
          >
            Other Projects
          </a>
          <ul
            id='dropdown1'
            className='dropdown-content light-blue darken-3 green-text text-lighten-5'
          >
            <li>
              <a
                className='green-text text-lighten-5'
                href='https://github.com/MichaelBruwer/GitFinder'
              >
                Github-Finder
              </a>
            </li>
            <li>
              <a
                className='green-text text-lighten-5'
                href='https://github.com/MichaelBruwer/it-logger'
              >
                It-logger
              </a>
            </li>
            <li>
              <a
                className='green-text text-lighten-5'
                href='https://github.com/MichaelBruwer/Contact-Keeper'
              >
                Contact-keeper
              </a>
            </li>
          </ul>

          <li>
            <a href='/Testimonials'>Testimonials</a>
          </li>
          <li>
            <a href='/skills'>Skills</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

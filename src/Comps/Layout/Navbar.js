import React from 'react';

const Navbar = () => {
  return (
    <div>
      <nav className='blue-grey lighten-3'>
        <div className='nav-wrapper'>
          <a href='#!' data-target='mobile-demo' className='sidenav-trigger'>
            <i className='material-icons'>menu</i>
          </a>
          <ul id='nav-mobile' className='right hide-on-med-and-down'>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/About'>About</a>
            </li>

            <a
              className='dropdown-trigger btn light-blue darken-3'
              data-target='dropdown1'
              href='#!'
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
            {/* <li>
              <a href='/Testimonials'>Testimonials</a>
            </li> */}
            {/* <li>
              <a href='/skills'>Skills</a>
            </li> */}
          </ul>
        </div>
      </nav>

      <ul className='sidenav  cyan lighten-4' id='mobile-demo'>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/About'>About</a>
        </li>
        {/* <li>
          <a href='/Testimonials'>Testimonials</a>
        </li> */}
        {/* <li>
          <a href='/skills'>Skills</a>
        </li> */}
      </ul>
    </div>
  );
};

export default Navbar;

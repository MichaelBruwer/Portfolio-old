import React from 'react';

const About = () => {
  return (
    <div>
      <div className='col s12 m7'>
        <h2 className='header'>Michael Bruwer</h2>
        <div className='card horizontal'>
          <div className='card-image'>
            <img src='/Images/2.jpg' alt='me' />
          </div>
          <div className='card-stacked'>
            <div className='card-content light-blue darken-3'>
              <h3>
                <i>About Me</i>
              </h3>
              <p className='flow-text'>
                Hey, this is my About Page, so I have to say something About
                myself. Sometimes it is hard to introduce yourself because you
                know yourself so well that you do not know what to strat with or
                where.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

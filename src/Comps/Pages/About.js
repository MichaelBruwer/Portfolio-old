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
                I am an aspiring Junior Front-end Developer with a passion for
                gaming. I am a trustworthy, respectful, organized, adaptable and
                truthful person who is looking to pursue a long-term career in
                front end development and meet some new and interesting people
                along the way.
                <br />
                I have been around computers most of my life mainly dealing with
                hardware but also occasionally loading software for people. This
                close contact has fuelled the passion for coding.
                <br />
                <br />
                Passion Board: Gaming, Anime, cooking, Netflix
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

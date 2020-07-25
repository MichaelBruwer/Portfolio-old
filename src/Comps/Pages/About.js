import React from 'react';

const About = () => {
  return (
    <div>
      <div className='card-image  center-align'>
        <img src='/Images/2.jpg' alt='me' className='circle Picture' />
      </div>
      <div className='col s1 size tcolor'>
        {/* <div className='card horizontal '>
          <div className='card-stacked '> */}
        {/* <div className='card-content light-blue darken-3 green-text text-lighten-5'> */}
        <h4>
          <i>About Me</i>
        </h4>
        <p className=' size '>
          I am an aspiring Junior Front-end Developer with a passion for gaming.
          I am a trustworthy, respectful, organized, adaptable and truthful
          person who is looking to pursue a long-term career in front end
          development and meet some new and interesting people along the way.
          <br />
          {/* <h4>
                  <i></i>
                </h4> */}
          I have been around computers most of my life mainly dealing with
          hardware but also occasionally loading software for people. This close
          contact has fuelled the passion for coding.
          <br />
          <h4>
            <i>Passions:</i>
          </h4>
          Gaming, Anime, cooking, Netflix
        </p>

        <h4>
          <i>Skills:</i>
        </h4>
        <img src='/Images/ratedskills.jpg' alt='skillschart' className='' />
        <br />
        {/* Contact me modal */}
        {/* Modal Trigger */}
        <a
          className='waves-effect waves-light btn modal-trigger'
          href='#modal1'
        >
          Contact me
        </a>
        {/* Modal Start */}
        <div id='modal1' className='modal modal-fixed-footer my-modal'>
          <div className='modal-content '>
            {/* formstart */}
            <form action='https://formspree.io/mknqqgzz' method='POST'>
              <div className='row'>
                <div className='col-12 col-sm-12 col-md-6 mx-auto'>
                  <label>Name:</label>
                  <input
                    type='text'
                    name='name'
                    className='form-control form-control-lg'
                    placeholder='Name'
                  />
                  <label>Message:</label>
                  <input
                    type='text'
                    name='message'
                    className='form-control form-control-lg'
                    placeholder='Message'
                  />
                  <label>Your Email:</label>
                  <input
                    type='email'
                    name='_replyto'
                    placeholder='Example@gmail.com'
                  />
                  <input
                    type='submit'
                    value='Send'
                    class='waves-effect waves-light btn'
                  />
                </div>
              </div>
            </form>
            {/* form end */}
          </div>
          <div className='modal-footer'>
            <a
              href='#!'
              className='modal-close waves-effect waves-green btn-flat'
            >
              Close
            </a>
          </div>
        </div>
        {/* End of modal */}
        <p className='green-text text-lighten-5'>
          <b>
            Email: <i>Michaelbruwer21@gmail.com</i>
            <br />
            Whatsapp: <i>0812584018</i>
          </b>
        </p>
      </div>
    </div>
    //   </div>
    // </div>
    // </div>
  );
};

export default About;

import React from 'react';

const ContactMe = () => {
  return (
    <div>
      <div className='row'>
        <div className='col s1 m5'>
          <div className='card light-blue darken-3'>
            <div className='card-content light-blue darken-3'>
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
                  For Work related Enquiry's Email me at
                  Michaelbruwer21@gmail.com or Whatsapp me at 0812584018
                </b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
// const bg = {
//   overlay: {
//     background: <img src='/Images/seal.jpg' alt='seal' />,
//   },
// };

export default ContactMe;

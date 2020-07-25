import React from 'react';

const Testimonials = () => {
  return (
    <div>
      <div className='row'>
        <div className='col s1 m5'>
          <div className='card light-blue darken-3'>
            <div className='card-image'>
              <img src='images/Jwp.jpg' alt='grabbin draggin' />
              <span className='card-title yellow-text text-lighten-1'>
                <p>
                  <b>
                    <i>Jason </i>
                  </b>
                </p>
              </span>
            </div>
            <div className='card-content purple lighten-4'>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
            </div>
            <div className='card-action'>
              <a href='https://www.lifechoices.co.za/'>LifeChoices</a>
            </div>
          </div>
        </div>

        {/* Second Card */}

        <div className='col s1 m5'>
          <div className='card light-blue darken-3'>
            <div className='card-image'>
              <img src='images/Alpnew.jpg' alt='Fox Spirt' className='Image' />
              <span className='card-title yellow-text text-lighten-1'>
                <p>
                  <b>
                    <i>Ariya</i>
                  </b>
                </p>
              </span>
            </div>
            <div className='card-content purple lighten-4'>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
            </div>
            <div className='card-action'>
              <a href='https://www.lifechoices.co.za/'>LifeChoices</a>
            </div>
          </div>
        </div>
      </div>

      {/* card3 */}
      <div className='row'>
        <div className='col s1 m5'>
          <div className='card light-blue darken-3'>
            <div className='card-image'>
              <img src='images/Can.jpg' alt='white dragon' className='Image' />
              <span className='card-title yellow-text text-lighten-1'>
                <p>
                  <b>
                    <i>Candice </i>
                  </b>
                </p>
              </span>
            </div>
            <div className='card-content purple lighten-4'>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,
              </p>
            </div>
            <div className='card-action'>
              <a href='https://www.lifechoices.co.za/'>LifeChoices</a>
            </div>
          </div>
        </div>
        {/* card4 */}

        <div className='col s1 m5'>
          <div className='card light-blue darken-3'>
            <div className='card-image'>
              <img
                src='images/godwin.jpg'
                alt='Fallen angel'
                className='Image'
              />
              <span className='card-title yellow-text text-lighten-1'>
                <p>
                  <b>
                    <i>Godwin </i>
                  </b>
                </p>
              </span>
            </div>
            <div className='card-content purple lighten-4'>
              <p>
                Michael has a pleasant personality. Michael demonstrated sound
                skills in Python programming. I recommend him without
                hesitation. Godwin Dzvapatsva (Head of Curriculum and Learning)
              </p>
            </div>
            <div className='card-action'>
              <a href='https://www.lifechoices.co.za/'>LifeChoices</a>
            </div>
          </div>
        </div>

        {/* cards stop */}
      </div>
    </div>
  );
};

export default Testimonials;

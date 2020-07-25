import React from 'react';
import './Home.css';
import 'materialize-css/dist/css/materialize.min.css';

const Home = () => {
  return (
    <div>
      <div className='col s1 tcolor'>
        {/* <div className='card-content light-blue darken-3 green-text text-lighten-5'> */}
        <div className='card-image'>
          <img
            src='images/godwin.jpg'
            alt='Godwin'
            className='circle PictureH'
          />

          <p className=' size'>
            Michael has a pleasant personality.
            <br /> Michael demonstrated sound skills in Python programming.
            <br /> I recommend him without hesitation.
            <br />
            Godwin Dzvapatsva (Head of Curriculum and Learning For
            <a href='https://www.lifechoices.co.za/' className='Lcolor'>
              {' '}
              LifeChoices
            </a>
            )
          </p>
        </div>
      </div>
      {/* </div> */}
      {/* Video */}
      <div className='col s1 center-align'>
        <div className='center-align'>
          <iframe
            title='Vid on proggraming'
            width='500'
            height='450'
            src='https://youtube.com/embed/Dv7gLpW91DM'
            frameborder='1'
            allowfullscreen
          ></iframe>
        </div>
      </div>
      {/* Video end */}
    </div>
  );
};

export default Home;

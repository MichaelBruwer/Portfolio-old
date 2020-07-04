import React from 'react';
import './Home.css';
import 'materialize-css/dist/css/materialize.min.css';

const Home = () => {
  return (
    <div>
      <div className='row left-align'>
        <div className='col s1 m5'>
          <div className='card-content light-blue darken-3'>
            <h4 className='green-text text-lighten-5'>
              {' '}
              Welcome to the landing Page
            </h4>

            <p className='green-text text-lighten-5'>
              Enjoy this Video on Programming, Mybe you too will learn to Code
              and be the Wizzard of Tomorow.
            </p>
          </div>
        </div>
      </div>

      <div class='video-container right-align'>
        <iframe
          title='Vid on proggraming'
          width='853'
          height='480'
          src='https://youtube.com/embed/Dv7gLpW91DM'
          frameborder='0'
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Home;

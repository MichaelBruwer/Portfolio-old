import React from 'react';
import './Home.css';
import 'materialize-css/dist/css/materialize.min.css';

const Home = () => {
  return (
    <div>
      <div className='row left-align'>
        <div className='col s1 m10'>
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
      </div>
    </div>
  );
};

export default Home;

import React from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import TitleCards from '../../components/TitleCards/TitleCards';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div className='home'>
    
      <Navbar />
      <div className='hero'>
        <img
          src='https://assetscdn1.paytm.com/images/cinema/The-Protector%20(2)-43afd4b0-469a-11f0-b360-791f8e677ff5.jpg'className='banner-img' alt='The Protector Banner'/>

        <div className='hero-caption'>
          <img src='https://image-cdn-fa.spotifycdn.com/image/ab67706c0000da846d90f46bf2a681e4771507c9' className='caption-img' alt='The Protector Logo' />

          <p> Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy.
          </p>

          <div className='hero-btns'>
            <button className='btn'>
              <img
                src='https://img.freepik.com/premium-psd/play-icon-button-black-background_609989-2403.jpg'
                alt='Play Icon'
              />
              Play
            </button>

            <button className='btn dark-btn'>
              <img src='https://img.freepik.com/premium-photo/information-icon-black-background_824086-4297.jpg' alt='Info Icon'
              />
              More Info
            </button>
          </div>
        </div>
      </div>

  
      <div className='more-cards'>
        <TitleCards title='Blockbuster Movies' />
        <TitleCards title='Only on Netflix' />
        <TitleCards title='Upcoming' />
        <TitleCards title='Top Picks for You' />
      </div>

      
      <Footer />
    </div>
  );
};

export default Home;

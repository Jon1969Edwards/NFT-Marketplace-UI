import React from 'react'
import './header.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Header = () => {
  
  return (
    <div className='header section__padding'>
      <div className='header-container'>
        <section className='neon-block'>
          <div className='block'>
            <span className='rainbow'></span>
            Win! Win! Win!
          </div>
        </section>
      </div>
      {/* <div className="header-content">
        <div>
          <h1>Win, Win, Win!!!</h1>
          <img className='shake-vertical' src={coin} alt="" />
        </div>
        // import coin from '../../assets/coin.png'
      </div> */}
      
    </div>
  )
}

export default Header

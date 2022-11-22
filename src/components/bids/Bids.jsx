import React from 'react'
import './bids.css'
import { AiFillHeart } from "react-icons/ai";
import slot1 from '../../assets/slot.png'
import slot2 from '../../assets/slotUI2.jpg'
import slot3 from '../../assets/slotUI3.png'
import bids4 from '../../assets/bids4.png'
import bids5 from '../../assets/bids5.png'
import bids6 from '../../assets/bids6.png'
import bids7 from '../../assets/bids7.png'
import bids8 from '../../assets/bids8.png'
import Slider from "react-slick";
import seller1 from '../../assets/seller1.jpg'
import seller2 from '../../assets/seller2.png'
import seller3 from '../../assets/seller3.png'
import seller4 from '../../assets/seller4.png'
import seller5 from '../../assets/seller5.png'
import seller6 from '../../assets/seller6.jpg'
import verify from '../../assets/verify.png'
import { Link } from 'react-router-dom';

const Bids = ({title}) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide:true,
    responsive: [
      {
        breakpoint: 1160,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          swipeToSlide:true,
        }
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          swipeToSlide:true,
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 470,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: true,
        }
      }
    ]
  };
  return (
    <div className='bids section__padding'>
      <div className="bids-container">
        <div className="bids-container-text">
          <h1>{title}</h1>
        </div>
        <div className="bids-container-card">
          <div className="card-column" >
            <div className="bids-card">
              <div className="bids-card-top">
                <img src={slot1} alt="" />
              <Link to={`/slots/Slots.jsx`}>
              <p className="bids-title">Slots</p>
              </Link>
              </div>
              <div className="bids-card-bottom">
                <p>1.25 <span>ETH</span></p>
                <p> <AiFillHeart /> 92</p>
              </div>
            </div>
          </div>
          <div className="card-column" >
            <div className="bids-card">
              <div className="bids-card-top">
                <img src={slot2} alt="" />
              <Link to={`/slotsInfo/Slots2.jsx`}>
              <p className="bids-title">Shuffle Cross</p>
              </Link>
              </div>
              <div className="bids-card-bottom">
                <p>0.20 <span>ETH</span></p>
                <p> <AiFillHeart /> 25</p>
              </div>
            </div>
          </div>
          <div className="card-column" >
            <div className="bids-card">
              <div className="bids-card-top">
                <img src={slot3} alt="" />
              <Link to={`/post/456`}>
              <p className="bids-title">Roulette</p>
              </Link>
              </div>
              <div className="bids-card-bottom">
                <p>0.55 <span>ETH</span></p>
                <p> <AiFillHeart /> 55</p>
              </div>
            </div>
          </div>
          <div className="card-column" >
            <div className="bids-card">
              <div className="bids-card-top">
                <img src={bids4} alt="" />
              <Link to={`/post/123`}>
              <p className="bids-title">Abstract Patern</p>
              </Link>
              </div>
              <div className="bids-card-bottom">
                <p>0.87 <span>ETH</span></p>
                <p> <AiFillHeart /> 82</p>
              </div>
            </div>
          </div>
          <div className="card-column" >
            <div className="bids-card">
              <div className="bids-card-top">
                <img src={bids5} alt="" />
              <Link to={`/post/123`}>
              <p className="bids-title">White Line Grafiti</p>
              </Link>
              </div>
              <div className="bids-card-bottom">
                <p>0.09 <span>ETH</span></p>
                <p> <AiFillHeart /> 22</p>
              </div>
            </div>
          </div>
          <div className="card-column" >
            <div className="bids-card">
              <div className="bids-card-top">
                <img src={bids6} alt="" />
              <Link to={`/post/123`}>
              <p className="bids-title">Abstract Triangle</p>
              </Link>
              </div>
              <div className="bids-card-bottom">
                <p>0.90 <span>ETH</span></p>
                <p> <AiFillHeart /> 71</p>
              </div>
            </div>
          </div>
          <div className="card-column" >
            <div className="bids-card">
              <div className="bids-card-top">
                <img src={bids7} alt="" />
              <Link to={`/post/123`}>
              <p className="bids-title">Lake Landscape</p>
              </Link>
              </div>
              <div className="bids-card-bottom">
                <p>0.52 <span>ETH</span></p>
                <p> <AiFillHeart /> 63</p>
              </div>
            </div>
          </div>
          <div className="card-column" >
            <div className="bids-card">
              <div className="bids-card-top">
                <img src={bids8} alt="" />
              <Link to={`/post/123`}>
              <p className="bids-title">Blue Red Art</p>
              </Link>
              </div>
              <div className="bids-card-bottom">
                <p>0.85 <span>ETH</span></p>
                <p> <AiFillHeart /> 66</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="load-more">
        <button>Load More</button>
      </div>
      <div className="header-slider">
        <h1>Top Winners!</h1>
       <Slider {...settings} className='slider'>
            <div className='slider-card'>
              <p className='slider-card-number'>1</p>
              <div className="slider-img">
                <img src={seller1} alt="" />
                <img src={verify} className='verify' alt="" />
              </div>
              <Link to={`/profile/Rian`}>
              <p className='slider-card-name'>James Bond</p>
              </Link>
              <p className='slider-card-price'>5.250 <span>ETH</span></p>
            </div>
            <div className='slider-card'>
              <p className='slider-card-number'>2</p>
              <div className="slider-img">
                <img src={seller2} alt="" />
                <img src={verify} className='verify' alt="" />
              </div>
              <Link to={`/profile/Rian`}>
              <p className='slider-card-name'>Rian Leon</p>
              </Link>
              <p className='slider-card-price'>4.932 <span>ETH</span></p>
            </div>
            <div className='slider-card'>
              <p className='slider-card-number'>3</p>
              <div className="slider-img">
                <img src={seller3} alt="" />
                <img src={verify} className='verify' alt="" />
              </div>
              <Link to={`/profile/Rian`}>
              <p className='slider-card-name'>Lady Young</p>
              </Link>
              <p className='slider-card-price'>4.620 <span>ETH</span></p>
            </div>
            <div className='slider-card'>
              <p className='slider-card-number'>4</p>
              <div className="slider-img">
                <img src={seller4} alt="" />
                <img src={verify} className='verify' alt="" />
              </div>
              <Link to={`/profile/Rian`}>
              <p className='slider-card-name'>Black Glass</p>
              </Link>
              <p className='slider-card-price'>4.125 <span>ETH</span></p>
            </div>
            <div className='slider-card'>
              <p className='slider-card-number'>5</p>
              <div className="slider-img">
                <img src={seller5} alt="" />
                <img src={verify} className='verify' alt="" />
              </div>
              <Link to={`/profile/Rian`}>
              <p className='slider-card-name'>Budhiman</p>
              </Link>
              <p className='slider-card-price'>3.921 <span>ETH</span></p>
            </div>
            <div className='slider-card'>
              <p className='slider-card-number'>6</p>
              <div className="slider-img">
                <img src={seller6} alt="" />
                <img src={verify} className='verify' alt="" />
              </div>
              <Link to={`/profile/Rian`}>
              <p className='slider-card-name'>Alex</p>
              </Link>
              <p className='slider-card-price'>3.548 <span>ETH</span></p>
            </div>
        </Slider>
      </div>
    </div>
  )
}

export default Bids

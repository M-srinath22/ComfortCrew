import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.css'; 
import Carousel from 'react-bootstrap/Carousel'; 
import './Slider.css';
import { Link } from 'react-router-dom';

export default function Slide() { 
  return ( 
    <div style={{ display: 'block', width: '100%' }} >  
      <Carousel> 
	
		
        <Carousel.Item interval={1000}> 
          <img 
            className="d-block w-100"
            src="https://blog.chesapeakeregional.com/hubfs/Young%20girl%20babysitting.jpg#keepProtocol"
            alt="Image One"
          /> 
          <Carousel.Caption> 
            <div className="columns">
              <div className="column is-full featured_wrapper p-0">
                <div className="title_wrapper">
                 
                  <h1 className="title is-1 has-text-white"><b>CHILD SITTING SERVICES</b></h1>
                  <Link to="/child">
                 <button className="button is-medium">Book the session</button>
                 </Link>
                </div>
              </div>
            </div>
          </Carousel.Caption> 
        </Carousel.Item> 
		
           
		   
        <Carousel.Item interval={1000}> 
          <img 
            className="d-block w-100"
            src="https://www.jfcares.org/wp-content/uploads/2018/11/JF-Cares-elderly-care-services.jpeg"
            alt="Image Two"
          /> 
          <Carousel.Caption> 
            <div className="columns">
              <div className="column is-full featured_wrapper p-0">
                <div className="title_wrapper">
                <h1 className="title is-1 has-text-white"><b>DAY NURSING SERVICES</b></h1>
                <Link to="/nurse">
                 <button className="button is-medium">Book the session</button>
                 </Link>
                </div>
              </div>
            </div>
          </Carousel.Caption> 
        </Carousel.Item> 
	
         
        
        <Carousel.Item interval={3000}> 
          <img 
            className="d-block w-100"
            src="https://i.ytimg.com/vi/A3ExwnlX4TI/maxresdefault.jpg"
            alt="Image Three"
          /> 
          <Carousel.Caption> 
            <div className="columns">
              <div className="column is-full featured_wrapper p-0">
                <div className="title_wrapper">
                <h1 className="title is-1 has-text-white"><b>Free & Fast Shipping Across India</b></h1>
                <Link to="/ship">
                    <button className="button is-medium">EXPLORE</button>
                    </Link>
                </div>
              </div>
            </div>
          </Carousel.Caption> 
        </Carousel.Item> 
        <Carousel.Item interval={3000}> 
          <img 
            className="d-block w-100"
            src="https://cdn.vettedbiz.com/wp-content/uploads/2019/11/16023736/home-services.jpg"
            alt="Image four"
          /> 
          <Carousel.Caption> 
            <div className="columns">
              <div className="column is-full featured_wrapper p-0">
                <div className="title_wrapper">
                 
                <h1 className="title is-1 has-text-white"><b>Regular Home Services</b></h1>
                <Link to="/service">
                <button className="button is-medium">EXPLORE</button>
                </Link>
                </div>
              </div>
            </div>
          </Carousel.Caption> 
        </Carousel.Item> 
        
        
      </Carousel> 
    </div> 
  ); 
}
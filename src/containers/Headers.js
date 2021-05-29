import React from 'react';
import { Link } from 'react-router-dom';
import '../../src/containers/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons';


const Headers = () => {
    return (
        <div>
        <nav class='navbar navbar-expand-lg navbar-light sticky-top'>
        <div class="container">
          <a class="navbar-brand" href="#">
              <span className='mr-4'>
                <h2>Dressified</h2>
              </span>
              
          </a>
        
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        
          <div class="collapse navbar-collapse" id="navbarNav">
            
            <ul class="navbar-nav navbar-customize navItem">
               <li>
                   <Link to='/home'><span><FontAwesomeIcon icon={faSearch} /></span>Search</Link>
               </li>
               <li>
                   <Link to='/'>Help</Link>
               </li>
               <li> 
                   <Link to='/'>Account</Link>  
               </li>
               <li>
                   <Link to='/contact'><span><FontAwesomeIcon icon={faShoppingBag} /></span></Link>
               </li>
               
            </ul>
          </div>
        </div>
      </nav>
      <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
 
  <div class="carousel-inner">
    <div class="carousel-item active background-one">
     <div className="container mt-5 py-5">
         <div className="row mt-5">
             <div className="col-lg-5">
               <div className="banner-caption py-5">
                   <div className="caption">
                       <h1>NEW ARRIVALS</h1>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eos quidem minima! Nihil dolor alias voluptatum ut, praesentium laudantium beatae.</p>
                       <button>BUY NOW</button>
                   </div>
               </div>
             </div>
             <div className="col-lg-7">

             </div>
         </div>
     </div>
    </div>
    {/* <div class="carousel-item background-two">
      
    </div>
    <div class="carousel-item background-three">
      
    </div> */}
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
      </div>
    );
};

export default Headers;
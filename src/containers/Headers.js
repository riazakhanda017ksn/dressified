import React from 'react';
import { Link } from 'react-router-dom';
import '../../src/containers/style.css'
import Header from './Header/Header';



const Headers = () => {
    return (<div>
        <div>
      <Header></Header>
      <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
 
  <div class="carousel-inner ">
    <div class="carousel-item active background-one">
     <div className="container mt-5 py-5">
         <div className="row mt-5">
             <div className="col-lg-5">
               <div className="banner-caption py-5">
                   <div className="caption animate__animated animate__backInLeft">
                       <h1>SUMMER ARRIVALS</h1>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eos quidem minima! Nihil dolor alias voluptatum ut, praesentium laudantium beatae.</p>
                       <Link to='/products'><button>SHOP NOW</button></Link>
                   </div>
               </div>
             </div>
             <div className="col-lg-7">

             </div>
         </div>
     </div>
    </div>
    <div class="carousel-item background-two ">
    <div className="container mt-5 py-5">
         <div className="row mt-5">
             <div className="col-lg-5">
               <div className="banner-caption py-5">
                   <div className="caption animate__animated animate__backInLeft">
                       <h1>WINTER ARRIVALS</h1>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eos quidem minima! Nihil dolor alias voluptatum ut, praesentium laudantium beatae.</p>
                       <Link to='/products'><button>SHOP NOW</button></Link>
                   </div>
               </div>
             </div>
             <div className="col-lg-7">

             </div>
         </div>
     </div>
    </div>
    <div class="carousel-item background-three ">
    <div className="container mt-5 py-5">
         <div className="row mt-5">
             <div className="col-lg-5">
               <div className="banner-caption py-5">
                   <div className="caption animate__animated animate__backInLeft">
                       <h1>NEW ARRIVALS</h1>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eos quidem minima! Nihil dolor alias voluptatum ut, praesentium laudantium beatae.</p>
                       
                       <Link to='/products'><button>SHOP NOW</button></Link>
                   </div>
               </div>
             </div>
             <div className="col-lg-7">

             </div>
         </div>
     </div>
    </div>
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

      </div>
    );
};

export default Headers;
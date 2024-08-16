import React from 'react'
import Goku from "./images/Goku-1.png"
import Obito from "./images/Tobi.png"
import t1 from "./images/luffy-3.jpg"
import t2 from "./images/punith.jpeg"
import t3 from "./images/yuva.jpg"
import t4 from "./images/luffy-1.png"
import "./home.css"
function Home() {
  return (
    <section id="homepage">
      <div id="intro">
      <div className='intro1'>
      <img src={Goku} alt="gokuimg" className='goku-img'></img>
      <div className='intro-data'>
      <h2>Publish your passions, your way</h2>
      <p>Anime Blogger is your go-to platform for all things anime.</p>
      <p>Create a unique and awesome anime blog easily.</p>
      <a href='#/compose' role="button" className='btn btn-warning mybtn mb-2'>Create Your Blog</a>
      </div>
      </div>

      <div className='intro2'>
      <img src={Obito} alt="obito-img" className='obito'></img>
      <div className='intro2-data'>
      <h3>Discover Amazing Anime Content</h3>
      <p>Explore a vast collection of blogs written by anime fans from around the world. </p>
      <a href='#/posts' role='button' className='btn btn-primary mt-2'>Explore the Blogs</a>
      </div>
      </div>

      </div>

      <div id="features">
      <div className="container-fluid">

      <div className="row">
      <div className="col-lg-4 feature-box">
      <i className="icon fa fa-search-plus fa-3x"></i>
      <h3>Discover Amazing Content</h3>
      <p>Explore a vast collection of anime blogs written by fans from around the world.</p>
      </div>

     <div className="col-lg-4 feature-box">
     <i className="icon fa fa-pencil fa-3x"></i> 
     <h3>Publish Your Own Blogs</h3>
      <p>Share your unique perspective on anime by writing and publishing your own blogs.</p>
     </div>

    <div className="col-lg-4 feature-box">
    <i className="icon fa fa-share-alt fa-3x"></i>
    <h3>Share on Social Media</h3>
    <p>Easily share your favorite blogs and anime content on social media platforms.</p>
    </div>

    <div className="col-lg-4 feature-box">
    <i className="icon fa fa-user-circle-o fa-3x"></i> 
    <h3>Customizable Profiles</h3>
    <p>Create and customize your profile to showcase your favorite anime and blogs.</p>
    </div>

    <div className="col-lg-4 feature-box">
    <i className="icon fa fa-check-circle fa-3x"></i> 
    <h3>Stay Updated</h3>
    <p>Get the latest news and updates about your favorite anime series and characters.</p>
    </div>

    <div className="col-lg-4 feature-box">
      <i className="icon fa fa-users fa-3x"></i>
      <h3>Diverse Community</h3>
      <p>Comment on blogs, join discussions, and connect with like-minded anime enthusiasts.</p>
      </div>
      </div>

  </div>
  </div>

    <div id="testimonial">
      <div id="testimonial-carousel" className="carousel slide" data-bs-ride="true">
      <div className="carousel-inner">
        <div className="carousel-item container-fluid active">
        <h3>"Anime Blogger is my go-to platform for all things anime. I love reading the reviews and connecting with other fans!"</h3>
        <img src={t1} alt="levi-img" className='testimonial-image'></img>
        <em>Vaishnav, New York</em>
        </div>
        <div className="carousel-item container-fluid">
        <h3>"Publishing my own blogs on Anime Blogger has been an amazing experience. The community is so supportive and engaging."</h3>
        <img src={t2} alt="sasori-img" className='testimonial-image'></img>
        <em>Punith, Hyderabad</em>
        </div>
        <div className="carousel-item container-fluid">
        <h3>"I always find the latest anime news and updates here. It's a fantastic resource for any anime fan."</h3>
        <img src={t3} alt="pain-img" className='testimonial-image'></img>
        <em>Yuva, Tokyo</em>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#testimonial-carousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#testimonial-carousel" data-bs-slide="next">
      <span className="carousel-control-next-icon"></span> 
      </button>
      </div>
      </div>
      
      <div id="community">
      <img src={t4} alt="naruto-bleach" className='comm-img'></img>
      <h3>Join The Community</h3>
      <p>Become a part of our vibrant anime community.</p>
      <p>Create an account to start writing your own blogs</p>
      <p>share your thoughts, and engage with other anime fans.</p>
      </div>
      </section>
  )
}

export default Home
import React from "react"
import pic1 from "./images/ichigo.png"
function About() {
  return (
    <div className="container-fluid" id="about">
    <h3 className="about-h3 pb-3">About Us</h3>
    <img src={pic1} alt="aboutImage" className="about-img"></img>
    <div className="about-content">
    <p> Welcome to our Anime Blogsite! We are passionate anime fans who love to share our thoughts, reviews, and recommendations with fellow enthusiasts.</p>
    <p>Our goal is to create a vibrant community where anime lovers from all around the world can come together to discuss their favorite shows, discover new ones, and connect with like-minded people.</p>
    <p>Whether you're a seasoned otaku or just getting started on your anime journey, we hope you'll find our blogsite entertaining, informative, and inspiring.</p>
    </div>
    <h4 className="about-h4">Thank You for Visiting our Blog Site 🤝</h4>
    </div>
  )
}

export default About

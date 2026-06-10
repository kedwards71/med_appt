import React from "react";
import "./LandingPage.css"

const LandingPage = () =>{
    return(
        <>
    <section class="hero-section">
        <div>
          <div data-aos="fade-up" class="flex-hero">
              
              <h1>
                <span class="text-gradient">
                  Your Health is Important too
                </span>
              </h1>
              <h4>
                Before you can help others you have to help yourself 
              </h4>
              <a href="#services">
                <button class="button">&#10084; Get Started</button>
              </a>
                
          </div>
  
        </div>
      </section>
        </>
    )
}

export default LandingPage;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import about1 from "../assets/about1.jpg";
import about2 from "../assets/about2.jpeg";
import about3 from "../assets/about3.webp";
import about4 from "../assets/about4.webp";
import './AboutUs.css';

function AboutUs() {
  return (
    
    <div className="container-fluid bg-light py-5">
      {/* Heading */}
      <h1 className="text-center bg-warning text-dark py-3 rounded">About Us</h1>

      {/* Main Content Box */}
      <div className="container d-flex justify-content-center">
        <div className="row bg-light rounded shadow p-4 w-100">
          
          {/* Image Section */}
          <div className="col-md-6 d-flex justify-content-center">
            <img 
              src={about1} 
              className="img-fluid rounded" 
              alt="Traditional Indian Handicrafts"
            />
          </div>

          {/* Text Section */}
          <div className="col-md-6 d-flex flex-column justify-content-center p-3">
            <h2 className="fw-bold text-center">About Kalakriti</h2>
            <p>
              <strong>KALAKRITI</strong> is an initiative of the Ministry of Textiles 
              to showcase the work of rural artisans & weavers. The main motive 
              behind this online e-commerce portal is to promote some of the world's 
              oldest and most traditional crafts of India.
            </p>
            <p>
              We aim to provide a platform for Indian handloom weavers and 
              handicraft artisans to sell their handloom and handicraft items online, 
              paving the way for their financial and social empowerment.
            </p>

          </div>
        </div>
      </div>

      {/* Objectives Section */}
      <div className="container mt-5">
        <h2 className="text-center mb-4">Our Objective</h2>
        
        <div className="row gy-4">
          <div className="col-md-6">
            <div className="image-container">
              <img 
                src={about2}
                alt="Handloom weaving in action"
                className="img-fluid rounded"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="objective-card">
              <span className="number-badge">1.</span>
              <p className='p1'>Supporting artisans through fair trade, local markets, and digital platforms preserves cultural heritage, sustains livelihoods, and fosters creativity. Investing in skills training and community programs ensures their craft thrives for future generations.</p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="objective-card">
              <span className="number-badge">2.</span>
              <p className='p1'>A virtual Indian handloom store empowers artisans by providing a direct platform to showcase and sell their crafts. This ensures fair pricing, preserves traditional weaving techniques, and connects buyers with authentic, handmade textiles, fostering a sustainable and ethical marketplace.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="image-container">
              <img 
                src={about3}
                alt="Handicraft artisan at work"
                className="img-fluid rounded"
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="image-container">
              <img 
                src={about4} 
                alt="Traditional weaving process"
                className="img-fluid rounded"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="objective-card">
              <span className="number-badge">3.</span>
              <p className='p1'>Our goal is to empower artisans through a dedicated digital marketplace, enabling them to sell directly to buyers. By eliminating middlemen, we ensure fair pricing, greater profits for craftsmen, and a sustainable platform that preserves India's rich handloom heritage.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  );
}

export default AboutUs;


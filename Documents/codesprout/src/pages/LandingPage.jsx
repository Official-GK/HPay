import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/landingPage.scss';

function LandingPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: 'code',
      title: 'Interactive Code Editor',
      description: 'Write, run, and test code in multiple languages with real-time feedback',
      color: '#2ecc71'
    },
    {
      icon: 'school',
      title: 'Learn & Practice',
      description: 'Step-by-step tutorials and challenges to improve your coding skills',
      color: '#3498db'
    },
    {
      icon: 'trending_up',
      title: 'Track Progress',
      description: 'Watch your skills grow with visual progress tracking and achievements',
      color: '#e74c3c'
    },
    {
      icon: 'psychology',
      title: 'AI Assistant',
      description: 'Get help from our AI coding assistant when you need guidance',
      color: '#9b59b6'
    }
  ];

  return (
    <div className={`landing-page ${isVisible ? 'visible' : ''}`}>
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="animated-text">
            Welcome to <span className="highlight">CodeSprout</span>
          </h1>
          <p className="subtitle">Your journey to becoming a better programmer starts here</p>
          <div className="cta-buttons">
            <Link to="/code" className="cta-button primary">
              Start Coding <i className="material-icons">arrow_forward</i>
            </Link>
            <Link to="/learn" className="cta-button secondary">
              Explore Tutorials <i className="material-icons">school</i>
            </Link>
          </div>
        </div>
        <div className="hero-animation">
          {/* Add a simple code animation here */}
          <pre className="code-preview">
            <code>
              <span className="keyword">function</span> growSkills() {'{'}
              <br />
              &nbsp;&nbsp;learn();
              <br />
              &nbsp;&nbsp;practice();
              <br />
              &nbsp;&nbsp;succeed();
              <br />
              {'}'}
            </code>
          </pre>
        </div>
      </div>
      
      <div className="features-section">
        <h2>Why Choose CodeSprout?</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`feature-card ${activeFeature === index ? 'active' : ''}`}
              onMouseEnter={() => setActiveFeature(index)}
              onMouseLeave={() => setActiveFeature(null)}
              style={{'--hover-color': feature.color}}
            >
              <div className="feature-icon">
                <i className="material-icons" style={{color: feature.color}}>{feature.icon}</i>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <div className="feature-hover">
                <Link to="/code" className="learn-more">
                  Try Now <i className="material-icons">arrow_forward</i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="getting-started-section">
        <h2>Get Started in 3 Easy Steps</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Choose Your Path</h3>
            <p>Select from multiple programming languages and difficulty levels</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Practice & Learn</h3>
            <p>Complete challenges and get instant feedback on your code</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Track Progress</h3>
            <p>Watch your skills grow with visual progress tracking</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage; 
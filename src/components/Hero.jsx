function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-label">
            ✦ The future is here
          </span>

          <h1>
            Build something
            <span> extraordinary.</span>
          </h1>

          <p>
            Orbit is a modern platform designed to help you
            turn ideas into powerful digital experiences.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="hero-primary">
              Explore projects
            </a>

            <a href="#about" className="hero-secondary">
              Learn more →
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="orbit-system">
            <div className="orbit-ring orbit-ring-one"></div>
            <div className="orbit-ring orbit-ring-two"></div>
    
            <div className="orbit-core">
              <span>O</span>
            </div>

            <div className="orbit-dot orbit-dot-one"></div>
            <div className="orbit-dot orbit-dot-two"></div>
            <div className="orbit-dot orbit-dot-three"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
function Features() {
  const features = [
    {
      icon: '✦',
      title: 'Fast',
      description:
        'Built for speed, performance and a smooth experience.',
    },
    {
      icon: '◉',
      title: 'Flexible',
      description:
        'Designed to adapt to different ideas, projects and needs.',
    },
    {
      icon: '∞',
      title: 'Scalable',
      description:
        'A solid foundation that grows with your project.',
    },
  ]

  return (
    <section className="features" id="features">
      <div className="features-container">
        <div className="features-header">
          <span className="features-label">
            ✦ Why Orbit
          </span>

          <h2>
            Everything you need
            <span> to move forward.</span>
          </h2>

          <p>
            A thoughtful foundation for creating modern,
            reliable and memorable digital experiences.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature) => (
            <div className="feature-card" key={feature.title}>
              <div className="feature-icon">
                {feature.icon}
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
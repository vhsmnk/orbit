function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          Orbit
        </a>

        <nav className="navbar-menu">
          <a href="#home">Home</a>
          <a href="#projects">Projetos</a>
          <a href="#about">Sobre</a>
          <a href="#contact">Contato</a>
        </nav>

        <button className="navbar-button">
          Vamos conversar
        </button>
      </div>
    </header>
  )
}

export default Navbar
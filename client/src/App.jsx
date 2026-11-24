

import "./App.css";

function App() {
  return (
    <div className="website">

      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">
          <span className="logo-icon">⚗</span>
          <span>Chem<span className="highlight">AR</span></span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#explore">Explore</a>
        </div>

        <a href="#explore" className="nav-button">
          Get Started
        </a>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">

        <div className="hero-content">
          <span className="tag">AUGMENTED REALITY LEARNING</span>

          <h1>
            Explore Chemistry
            <br />
            <span className="highlight">Beyond the Classroom.</span>
          </h1>

          <p>
            Discover atoms, molecules, and chemical structures
            through an interactive learning experience.
            Make chemistry easier and more exciting with ChemAR.
          </p>

          <div className="hero-buttons">
            <a href="#explore" className="primary-button">
              Explore Now →
            </a>

            <a href="#about" className="secondary-button">
              Learn More
            </a>
          </div>
        </div>

        {/* Chemistry Illustration */}
        <div className="hero-visual">
          <div className="glow"></div>

          <div className="molecule">
            <div className="bond bond-one"></div>
            <div className="bond bond-two"></div>
            <div className="bond bond-three"></div>

            <div className="atom atom-center">O</div>
            <div className="atom atom-left">H</div>
            <div className="atom atom-right">H</div>
          </div>

          <div className="floating-label label-one">
            <span>01</span> Hydrogen
          </div>

          <div className="floating-label label-two">
            <span>08</span> Oxygen
          </div>

          <div className="floating-label label-three">
            H₂O · Water Molecule
          </div>
        </div>

      </section>

      {/* Features */}
      <section className="features" id="explore">

        <div className="section-heading">
          <span className="tag">DISCOVER CHEMISTRY</span>
          <h2>Learn. Explore. Experience.</h2>
          <p>
            Understand chemistry through interactive and
            engaging learning tools.
          </p>
        </div>

        <div className="feature-grid">

          <div className="feature-card">
            <div className="feature-icon">⚛</div>
            <h3>Atoms</h3>
            <p>
              Discover the basic building blocks of matter
              and learn about chemical elements.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">⚗</div>
            <h3>Molecules</h3>
            <p>
              Explore how atoms combine to form different
              molecules and chemical compounds.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">◇</div>
            <h3>AR Learning</h3>
            <p>
              Experience a new way of understanding
              chemistry through 3D visualization.
            </p>
          </div>

        </div>
      </section>

      {/* About */}
      <section className="about" id="about">
        <div>
          <span className="tag">ABOUT CHEMAR</span>
          <h2>Making Chemistry Easier to Understand.</h2>
        </div>

        <p>
          ChemAR is an educational prototype designed to
          introduce students to chemistry through visual
          learning and augmented reality concepts.
        </p>
      </section>

      {/* Footer */}
      <footer>
        <div className="logo">
          ⚗ Chem<span className="highlight">AR</span>
        </div>

        <p>© 2026 ChemAR. Chemistry made interactive.</p>
      </footer>

    </div>
  );
}

export default App;

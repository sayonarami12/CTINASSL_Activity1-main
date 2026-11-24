

import "./App.css";
import { useState, useEffect } from "react";

function App() {

  const [elements, setElemets] = useState([]);
  const [formData, setFormData ] = useState({name: "", symbol: "", atomicNumber: ""});

  const fetchElements = async () => {
    try{
      const response = await fetch("http://localhost:5000/api/elements");
      const data = await response.json();
      setElemets(data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchElements();
  }, []);

  // Handle form inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // SUBMIT FORM (Create)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("http://localhost:5000/api/elements", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setFormData({ name: "", symbol: "", atomicNumber: "" }); // Clear form
      fetchElements(); // Refresh list
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  // DELETE (Delete)
  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/elements/${id}`, {
        method: "DELETE",
      });
      fetchElements(); // Refresh list
    } catch (error) {
      console.error("Error deleting:", error);
    }
  };

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

        {/* --- DATABASE CRUD SECTION START --- */}
        <div style={{ marginTop: "80px", padding: "40px", backgroundColor: "rgba(255, 255, 255, 0.05)", borderRadius: "20px" }}>
          <div className="section-heading">
            <span className="tag">DATABASE DEMO</span>
            <h2>Element Inventory</h2>
            <p>Add and delete elements to demonstrate MERN CRUD.</p>
          </div>

          {/* CREATE FORM */}
          <form onSubmit={handleSubmit} style={{ display: "flex", gap: "15px", marginBottom: "30px", justifyContent: "center", flexWrap: "wrap" }}>
            <input 
              type="text" 
              name="name" 
              placeholder="Element Name (e.g., Hydrogen)" 
              value={formData.name} 
              onChange={handleChange} 
              required 
              style={{ padding: "12px", borderRadius: "8px", border: "1px solid #ccc", minWidth: "200px" }} 
            />
            <input 
              type="text" 
              name="symbol" 
              placeholder="Symbol (e.g., H)" 
              value={formData.symbol} 
              onChange={handleChange} 
              required 
              style={{ padding: "12px", borderRadius: "8px", border: "1px solid #ccc", width: "120px" }} 
            />
            <input 
              type="number" 
              name="atomicNumber" 
              placeholder="Atomic Number" 
              value={formData.atomicNumber} 
              onChange={handleChange} 
              required 
              style={{ padding: "12px", borderRadius: "8px", border: "1px solid #ccc", width: "150px" }} 
            />
            <button type="submit" className="primary-button" style={{ border: "none", cursor: "pointer", padding: "12px 24px" }}>
              Add Element
            </button>
          </form>

          {/* READ LIST */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <table style={{ width: "100%", maxWidth: "800px", borderCollapse: "collapse", textAlign: "left", backgroundColor: "rgba(0,0,0,0.2)", borderRadius: "10px", overflow: "hidden" }}>
              <thead>
                <tr style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}>
                  <th style={{ padding: "15px", borderBottom: "1px solid #444" }}>Name</th>
                  <th style={{ padding: "15px", borderBottom: "1px solid #444" }}>Symbol</th>
                  <th style={{ padding: "15px", borderBottom: "1px solid #444" }}>Atomic Number</th>
                  <th style={{ padding: "15px", borderBottom: "1px solid #444" }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {elements.length > 0 ? (
                  elements.map((el) => (
                    <tr key={el._id} style={{ borderBottom: "1px solid #333" }}>
                      <td style={{ padding: "15px" }}>{el.name}</td>
                      <td style={{ padding: "15px" }}>{el.symbol}</td>
                      <td style={{ padding: "15px" }}>{el.atomicNumber}</td>
                      <td style={{ padding: "15px" }}>
                        <button 
                          onClick={() => handleDelete(el._id)} 
                          style={{ backgroundColor: "#ff4d4d", color: "white", padding: "8px 16px", border: "none", borderRadius: "6px", cursor: "pointer", fontWeight: "bold" }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" style={{ padding: "20px", textAlign: "center", color: "#888" }}>
                      No elements in the database yet. Add one above!
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        {/* --- DATABASE CRUD SECTION END --- */}

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

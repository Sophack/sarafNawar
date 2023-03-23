
import "../styles/styling.css";

function Navbar () {
  return ( 
    <nav>      
      <div> 
        <ul id="navbar">
          <li><a className="active" href="index.html">Home</a>
          </li>
          <li><a href="index.html">About</a>
            </li>
            <li><a href="index.html">Portfolio</a>
            </li>
            <li><a href="index.html">Resume</a>
            </li>
            <li><a href="index.html">Contact</a>
          </li>
        </ul>
      </div>

      <div id="mobile">
        <i id="bar" className="fas fa-bars"></i>
        <i id="bar" className="fas fa-times"></i>

      </div>
    </nav>

    )
}

export default Navbar
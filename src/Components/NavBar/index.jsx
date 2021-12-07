import { NavLink} from "react-router-dom";

const NavBar = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">Rick and Morty</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <span className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categorias
              </span>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink to="/category/Human" className="dropdown-item">Humanos</NavLink>
                <NavLink to="/category/Alien" className="dropdown-item">Aliens</NavLink>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;

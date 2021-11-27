import { NavLink} from "react-router-dom";

const NavBar = () => {

  return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <NavLink to="/" className="nav-link">Rick and Morty</NavLink>
            </li>
            <li class="nav-item active">
                <NavLink to={`/category/Human`} className="nav-link">Humanos</NavLink>
            </li>
            <li class="nav-item active">
                <NavLink to="/category/Alien" className="nav-link" >Aliens</NavLink>
            </li>
          </ul>
        </div>
      </nav>
  )
}

export default NavBar;

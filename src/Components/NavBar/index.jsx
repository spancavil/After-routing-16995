import { NavLink, BrowserRouter as Router} from "react-router-dom";

const NavBar = () => {

  return (
    <Router>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid justify-content-space-between">
        <NavLink to="/" className="navbar-brand">Rick and Morty</NavLink>
        <NavLink to={`/category/Human`} className="navbar-brand">Humanos</NavLink>
        <NavLink to="/category/Alien" className="navbar-brand" >Aliens</NavLink>
      </div>
    </nav>
    </Router>
  )
}

export default NavBar;

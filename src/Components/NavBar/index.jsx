import { useContext } from "react";
import { NavLink} from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import CartWidget from "./CartWidget";

const NavBar = () => {

  const {cart} = useContext(CartContext);

  return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <NavLink to="/" className="nav-link">Coder store</NavLink>
            </li>
            <li class="nav-item active">
                <NavLink to={`/category/men's clothing`} className="nav-link">Men</NavLink>
            </li>
            <li class="nav-item active">
                <NavLink to="/category/women's clothing" className="nav-link" >Women</NavLink>
            </li>
          </ul>
          <div> 
          <CartWidget/>
          <span style={{
            color: 'yellow'
          }}>{cart.length}</span>
          </div>

        </div>
      </nav>
  )
}

export default NavBar;

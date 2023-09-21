import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Home, Search, PlusSquare, UserCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <StyledNavbar>
      <div className="menu_logo">
        <NavLink to="/home">
          <img src="/images/logo.png" alt="logo's image" />
        </NavLink>
      </div>

      <div className="menuMobile">
        <NavLink to="/home" activeClassName="active">
          <Home />
        </NavLink>
        <NavLink to="/findyourpet" activeClassName="active">
          <Search />
        </NavLink>

        <NavLink to="/addapet" activeClassName="active">
          <PlusSquare />
        </NavLink>

        <NavLink to="/userprofile" activeClassName="active">
          <UserCircle2 />
        </NavLink>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;

const StyledNavbar = styled.nav`
  background-color: #25938f;
  color: white;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .menu_logo img {
    max-width: 100px; /* Adjust the size as needed */
  }

  .menuMobile a {
    color: white;
    text-decoration: none;
    margin-right: 20px; /* Adjust the spacing as needed */
  }

  .menuMobile a.active {
    /* Add styles for the active link here */
    font-weight: bold;
    /* For example, bold text for the active link */
  }
`;

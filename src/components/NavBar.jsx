import styled from "styled-components";
import logo from "../images/logo.png";

const Navbar = () => {
  
  return (
    <StyledNavbar>
      <div className="menu_logo">
        <img src={logo} alt="" srcset="" />
      </div>
    </StyledNavbar>
  );
};

export default Navbar;

const StyledNavbar = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .menu_logo img {
    max-width: 200px;
    heighy: auto;
  }
`;

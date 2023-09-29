//NOT WORKING YET
import { styled } from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <p>Copyright © 2023 </p>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
width: 100%;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px 10px rgba(3,3,3,0.1);
  color: #25938f;
  font-family: "Roboto mono", monospace;

  p{
    display: flex;
    justify-content: center;
  }
`;
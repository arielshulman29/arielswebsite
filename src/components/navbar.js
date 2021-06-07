import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import styled from 'styled-components'
import useCollapse from 'react-collapsed';

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin: 1rem; 
  fontFamily: "'Montserrat', sans-serif";
  font-weight: 600;
  :hover
  {
      cursor: pointer;
      text-decoration: none;
      color: rgb(203, 255, 252);
  }
  &.active{
    text-decoration: none;
    color: rgb(0, 217, 255);
  }
`;

const StyledMenu = styled.div`
display: flex;
background: rgba(0,0,0,0.8);
flex-direction: column;
  @media (min-width: 992px) {
    background:transparent;
    flex-direction:row;
  }
`;


const StyledNav = styled.nav`
position: sticky;
position: -webkit-sticky;
z-index:10;
top:0;
height:0;
padding: 0;
`;

const StyledBtn = styled.button`
background: transparent;
border: none;
color:#fff;
display:flex;
font-size: 30px;
z-index: 11;
`;

const NavBar = () => {
  const [isExpanded, setExpanded] = useState(true);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
  const handleToggle = () => setExpanded((prevExpanded) => !prevExpanded);
  const handleToggleResize = () => {
    if ((window.innerWidth < 992 && isExpanded) || (window.innerWidth >= 992 && !isExpanded)) {
      handleToggle();
    }
  }
  useEffect(() => {
    window.addEventListener('resize',handleToggleResize);
    return () => {
      window.removeEventListener('resize',handleToggleResize);
    }
  });
  
  return (
    <StyledNav>
      <div className='d-lg-none'>
        <StyledBtn {...getToggleProps({
          onClick: handleToggle,
        })}><i className="fa fa-list"></i></StyledBtn>
      </div>
      <StyledMenu {...getCollapseProps()}>
        <StyledLink
          to="backgroundvideo"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onClick={handleToggleResize}>
          HOME
</StyledLink>
        <StyledLink to="myworks"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onClick={handleToggleResize}>
          WORKS
</StyledLink>
        <StyledLink to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onClick={handleToggleResize}>
          ABOUT
</StyledLink>
        <StyledLink activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onClick={handleToggleResize}>
          CONTACT
</StyledLink>
      </StyledMenu>
    </StyledNav>
  )
}
export default NavBar;
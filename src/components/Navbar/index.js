/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileNavLogo, MobileLink } from './NavBarStyledComponent'
import { useState } from 'react';
import { AiFillRocket } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { useTheme } from 'styled-components';
import { Bio } from '../../data/constants';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  return (
    <Nav>
      <NavbarContainer>
      <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: "black", marginBottom: '20;', cursor: 'pointer' }}>
            <AiFillRocket size="3rem" /> <Span>My Portfolio</Span>
          </a>
        </NavLogo>
        <MobileIcon>
        <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </MobileIcon>
        <NavItems>
        <NavLink href="#about">About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#education'>Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">Github Profile</GitHubButton>
        </ButtonContainer>
      </NavbarContainer>
      {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}>About</MobileLink>
            <MobileLink href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Skills</MobileLink>
            <MobileLink href='#experience' onClick={() => {
              setIsOpen(!isOpen)
            }}>Experience</MobileLink>
            <MobileLink href='#projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>Projects</MobileLink>
            <MobileLink href='#education' onClick={() => {
              setIsOpen(!isOpen)
            }}>Education</MobileLink>
            <GitHubButton style={{padding: '10px 16px',background: `${theme.primary}`, color: 'white',width: 'max-content'}} href={Bio.github} target="_blank">Github Profile</GitHubButton>
          </MobileMenu>
        }
    </Nav>
  )
}

export default Navbar

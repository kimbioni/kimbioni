import React, { useEffect, useRef } from "react";
import "./Navbar.css";
import logo from "../../assets/logoKim.png";
import logoMobile from "../../assets/logoKim.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/linkedin";
import "react-social-icons/instagram";
import "react-social-icons/github";
import "react-social-icons/whatsapp";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";
import up_arrow from "../../assets/up-arrow.svg";

const Navbar = () => {
  //const [menu, setMenu] = useState('home')
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };


  return (
    <div className="navbar" id="navbar1">
      <img src={logo} alt="logo Kim" className="nav-logo" />
      <img
        src={menu_open}
        onClick={openMenu}
        alt=""
        className="nav-mobile-open"
      />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          onClick={closeMenu}
          alt=""
          className="nav-mobile-close"
        />
        <img src={logoMobile} alt="logo Kim" className="nav-logo-mobile" />
        <li className="hover-animation">
          <AnchorLink className="anchor-link">
            Home
          </AnchorLink>
        </li>
        <li className="hover-animation">
          <AnchorLink className="anchor-link" offset="100" href="#about">
            Sobre mim
          </AnchorLink>
        </li>
        <li className="hover-animation">
          <AnchorLink offset="30" className="anchor-link" href="#portfolio1">
            Portifólio
          </AnchorLink>
        </li>
        <div className="nav-socials-mobile-menu">
          <SocialIcon
            className="nav-socials_icons"
            target="_blank"
            url="https://www.linkedin.com/in/kim-bioni-9ba8a614b/"
            bgColor="transparent"
          />
          <SocialIcon
            className="nav-socials_icons"
            target="_blank"
            url="https://www.instagram.com/k.bioni"
            bgColor="transparent"
          />
          <SocialIcon
            className="nav-socials_icons"
            target="_blank"
            url="https://github.com/kimbioni"
            bgColor="transparent"
          />
          <SocialIcon
            className="nav-socials_icons"
            target="_blank"
            url="https://wa.me/5515981297246"
            network="whatsapp"
            bgColor="transparent"
          />
        </div>
      </ul>

      <div className="nav-socials">
        <SocialIcon
          className="nav-socials_icons"
          target="_blank"
          url="https://www.linkedin.com/in/kim-bioni-9ba8a614b/"
          bgColor="transparent"
        />
        <SocialIcon
          className="nav-socials_icons"
          target="_blank"
          url="https://www.instagram.com/k.bioni"
          bgColor="transparent"
        />
        <SocialIcon
          className="nav-socials_icons"
          target="_blank"
          url="https://github.com/kimbioni"
          bgColor="transparent"
        />
        <SocialIcon
          className="nav-socials_icons"
          target="_blank"
          url="https://wa.me/5515981297246"
          network="whatsapp"
          bgColor="transparent"
        />
      </div>

      <div>
          <AnchorLink offset={100} className="anchor-link top-0-link" href="#navbar1">
            <img className="top-arrow" src={up_arrow} alt="" />
          </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;

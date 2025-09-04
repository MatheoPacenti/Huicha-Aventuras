// import { useState } from "react";
import arbolesMarrones from "../../assets/img/arbolesMarrones.png";
import logoHuicha from "../../assets/img/logo-huicha-con-aventura-transparente.png";
import nubes from "../../assets/img/nubes.png";
import facebook from "../../assets/img/svg-redes/facebook.svg";
import instagram from "../../assets/img/svg-redes/instagram.svg";
import wpp from "../../assets/img/svg-redes/wpp.svg";

import "./footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="contactanos">
          <span className="title">Contactanos</span>

          <p className="dato">
            <a href="tel:+542494381198" className="link-plano">
              +54 2494 38 1198
            </a>
          </p>

          <p className="dato">
            <a href="mailto:loremipsum@gmail.com" className="link-plano">
              lorem ipsum@gmail.com
            </a>
          </p>

          <div className="svg-redes">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <img className="facebook" src={facebook} alt="facebook" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <img className="instagram" src={instagram} alt="instagram" />
            </a>
            <a href="https://wa.me/5492494381198" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <img className="wpp" src={wpp} alt="whatsapp" />
            </a>
          </div>
        </div>
      </div>

      <div className="huicha-aventuras">
        <img className="logo-huicha" src={logoHuicha} alt="logo Huicha aventuras" />
        <img className="arboles-marrones" src={arbolesMarrones} alt="arboles marrones" />
        <img className="nubes" src={nubes} alt="nubes" />
      </div>
    </footer>
  );
}

export default Footer;

import React from "react";
import "./styles.css";
const logo = require('../../assets/logo.png')

function Header() {
  return (
    <header>
      <div className="container-Title">
        <img src={logo} alt="Logo dev"/>
        <h1>Agenda de Contato</h1>
        <p>
          Desenvolvido por
          <a href="https://github.com/gabrielmonteirodev/Agenda-Contato"> gabrielmonteirodev</a>
        </p>
      </div>
    </header>
  );
}

export default Header;

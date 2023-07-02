import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} <a href="https://github.com/DaniJFerreira/keeper-web-app"><i className="fa-brands fa-github"></i></a></p>
    </footer>
  );
}

export default Footer;

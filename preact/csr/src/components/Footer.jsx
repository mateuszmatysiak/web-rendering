import { h } from "preact";

const Footer = ({ name }) => {
  return (
    <footer>
      <h2 className="footer-name">{name}</h2>
    </footer>
  );
};

export default Footer;

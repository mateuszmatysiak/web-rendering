import { h } from "preact";

const Header = ({ name, renderType, numberOfElements }) => {
  return (
    <header>
      <h1 className="header-name">
        <span>{name}</span> {renderType}
      </h1>
      <p>
        <strong>{Intl.NumberFormat("pl-PL").format(numberOfElements)}</strong>{" "}
        wyrenderowanych elementów
      </p>
    </header>
  );
};

export default Header;

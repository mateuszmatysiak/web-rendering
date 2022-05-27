import { h } from "preact";

const List = ({ children }) => {
  return <ul className="list grid">{children}</ul>;
};

export default List;

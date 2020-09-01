import React from "react";
import "../../helpers/navbar-dropdown.css";
import { Link } from "react-router-dom";

export default function NavbarDropDown(props) {
  return (
    <div className="nav-item dropdown">
      Categories
      <div className="dropdown-content">
        {props.data
          ? props.data.map((content) => {
              return (
                <Link to={`/category/${content}`} className="dropdown-item" key={content}>
                  {content}
                </Link>
              );
            })
          : null}
      </div>
    </div>
  );
}

NavbarDropDown.defaultProps = {
  data: [],
};

import React from "react";
import "../../helpers/navbar-dropdown.css";

export default function NavbarDropDown(props) {
  return (
    <div className="nav-item dropdown">
      Categories
      <div className="dropdown-content">
        {props.data
          ? props.data.map((content) => {
              return (
                <span className="dropdown-item" key={content}>
                  {content}
                </span>
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

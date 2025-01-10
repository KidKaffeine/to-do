import "./navbar.module.css";
import { NavLink } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusSquare,
  faCircleExclamation,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <nav>
      <NavLink to="add">
        <FontAwesomeIcon
          icon={faPlusSquare}
          size="xl"
        />
      </NavLink>
      <NavLink to="important">
        <FontAwesomeIcon
          icon={faCircleExclamation}
          size="xl"
        />
      </NavLink>
      <FontAwesomeIcon icon={faLightbulb} size="xl" />
    </nav>
  );
}

export default Navbar;

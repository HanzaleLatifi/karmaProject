import { NavLink } from "react-router-dom";
import { ImHome } from "react-icons/im";
import { AiFillStar } from "react-icons/ai";
import { BsFillXDiamondFill } from "react-icons/bs";

const NavItems = [
  { label: "Home", path: "/", icon: <ImHome /> },
  { label: "Favorites", path: "/favorites", icon: <AiFillStar /> },
  { label: "About us", path: "/about-us", icon: <BsFillXDiamondFill /> },
];

function NavigationItems() {

  return (
    <>
      {NavItems.map((item) => {
        return (
          <li key={item.path}>
            <NavLink
              end
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? " transition duration-300 text-primary-yellow"
                  : ""
              }
            >
              <span className="flex items-center gap-1.5 cursor-pointer">
                {item.icon}
                {item.label}
              </span>
            </NavLink>
          </li>
        );
      })}

    </>
  );
}

export default NavigationItems;

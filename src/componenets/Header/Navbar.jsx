import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline text-green-400 underline-offset-4" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/address"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline text-green-400 underline-offset-4" : ""
          }
        >
          Address
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline text-green-400 underline-offset-4" : ""
          }
        >
          About Us
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {
                links
              }
            </ul>
          </div>
          <a className="text-xl font-bold text-green-300">Himu Chowdhury</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {
                links
            }
          </ul>
        </div>
        <div className="navbar-end">
          <a className="py-3 px-5 rounded hover:bg-red-300 bg-green-300 ">My Cart</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

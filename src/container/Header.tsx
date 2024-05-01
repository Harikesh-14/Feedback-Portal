import { Link } from "react-router-dom";
import { links } from "../DataList/headerLinks";
import { GrLogin, GrLogout } from "react-icons/gr";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/userContext";
import { BiUserPlus } from "react-icons/bi";
import { HeaderT } from "../types";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isActive, setIsActive] = useState<HeaderT>({
    Home: "bg-gray-300",
    Reviews: "",
    MyReviews: "",
    About: "",
    Contact: ""
  });
  const { userLoggedIn, setUserLoggedIn, isUserLoggedIn, setIsUserLoggedIn } = useContext(UserContext)!;

  useEffect(() => {
    fetch('http://localhost:3000/user/profile', {
      credentials: 'include'
    }).then(response => {
      response.json().then(userInfo => {
        setUserLoggedIn(userInfo)

        if (userInfo.message === 'Logged in') {
          setIsUserLoggedIn(true)
        } else {
          setIsUserLoggedIn(false)
        }
      })
    })
  }, []);

  const logoutUser = async () => {
    try {
      await fetch("http://localhost:3000/user/logout", {
        method: "POST",
        credentials: "include"
      });

      setUserLoggedIn({
        id: "",
        username: "",
        firstName: "",
        lastName: "",
        phone: 0,
        message: ""
      });

      setIsUserLoggedIn(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleNavLinkClick: React.MouseEventHandler<HTMLAnchorElement> = (event) => {
    const clickedLink = event.currentTarget.getAttribute("data-title");
    setIsNavOpen(false);
    const updatedActiveState: HeaderT = {
      Home: "",
      Reviews: "",
      MyReviews: "",
      About: "",
      Contact: ""
    };
    Object.keys(isActive).forEach((link) => {
      updatedActiveState[link as keyof HeaderT] = link === clickedLink ? link : "";
    });
    setIsActive(updatedActiveState);
  };

  return (
    <header className="fixed z-50 top-0 w-full px-10 py-2 flex flex-col flex-wrap gap-3 justify-center items-center bg-gray-200 md:flex-row md:justify-between">
      <h1 className="text-blue-500 text-4xl font-semibold md:text-3xl">CompRev</h1>

      <nav className={`md:flex md:flex-row md:items-center ${isNavOpen ? 'flex' : 'hidden'}`}>
        <ul className="flex flex-col gap-4 md:flex-row">
          {links.map((link, index) => (
            <li
              key={index}
              className={`h-full flex justify-center items-center px-2 text-xl font-sans hover:bg-gray-300 md:py-3 rounded ${isActive[link.title] ? "bg-gray-300" : ""}`}
            >
              <Link to={link.path} onClick={handleNavLinkClick} data-title={link.title}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className={`md:flex md:flex-row gap-5 items-center ${isNavOpen ? 'flex' : 'hidden'}`}>
        {isUserLoggedIn ? (
          <>
            <p
              className="font-medium text-lg tracking-wide bg-gray-300 p-2 rounded border-b-2 border-b-gray-400 text-gray-600 hover:text-gray-800 hover:border-b-[.15rem] select-none cursor-pointer transition ease-linear"
            >
              {userLoggedIn.firstName}
            </p>
            <Link
              to={"#"}
              className="group flex items-center gap-1 px-6 py-2 bg-orange-600 rounded-full text-gray-100 shadow-md hover:bg-gray-800 hover:shadow-lg transition ease-linear"
              onClick={logoutUser}
            >
              Logout
              <GrLogout
                className="group-hover:translate-x-1 transition-all"
              />
            </Link>
          </>
        ) : (
          <>
            <Link
              to={"/login"}
              className="group flex items-center gap-1 px-6 py-2 bg-transparent rounded-full text-blue-500 border border-blue-500 transition ease-linear"
              onClick={handleNavLinkClick}
            >
              Login
              <GrLogin
                className="group-hover:translate-x-1 transition-all"
              />
            </Link>
            <Link
              to={"/register"}
              className="group flex items-center gap-1 px-6 py-2 bg-orange-600 rounded-full text-gray-100 shadow-md hover:bg-gray-800 hover:shadow-lg transition ease-linear"
              onClick={handleNavLinkClick}
            >
              Register
              <BiUserPlus
                className="group-hover:translate-x-1 transition-all text-xl"
              />
            </Link>
          </>
        )}
      </div>

      <button
        className="md:hidden focus:outline-none absolute top-5 right-5"
        onClick={() => setIsNavOpen(!isNavOpen)}
      >
        <div className="flex flex-col gap-1">
          <span className="w-8 h-1 rounded-full bg-black"></span>
          <span className="w-8 h-1 rounded-full bg-black"></span>
          <span className="w-8 h-1 rounded-full bg-black"></span>
        </div>
      </button>
    </header>
  );
}

export default Header;

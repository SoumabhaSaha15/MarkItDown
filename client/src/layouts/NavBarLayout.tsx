import React from "react";
import { IoMenu, IoMoon, IoSunny } from "react-icons/io5";
import { Outlet } from "react-router-dom";
import { useAuth } from "../context/Auth/AuthContext";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/Theme/ThemeContext";
import { Link } from "react-router-dom";
const SideBar: React.FC<{ children: React.ReactElement, sideBarElement: React.ReactElement }> = ({ children, sideBarElement }: { children: React.ReactElement, sideBarElement: React.ReactElement }) => {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {children}
      </div>
      <div className="drawer-side max-w-[100%]">
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay max-w-[100%]"></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          {/* Sidebar content here */}
          {sideBarElement}
        </ul>
      </div>
    </div>
  )
}

export const NavBarOutlet: React.FC = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const toggleTheme = useTheme();
  React.useEffect(() => {
    if (auth.userDetails === null) auth.login(() => { }, () => { navigate('/', { replace: true }) });
    else if (auth.userDetails.isLoggedIn === false) navigate('/', { replace: true });
    else { }
  }, []);

  const swapOn = `swap-on h-10 w-10 fill-current scale-75`, swapOff = `swap-off h-10 w-10 fill-current scale-75`;

  return <SideBar children={(
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <label htmlFor="my-drawer" className="btn btn-circle btn-ghost drawer-button">
            <IoMenu className="h-[80%] w-[80%]" size={24} />
          </label>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-xl">MarkItDown</a>
        </div>
        <div className="navbar-end">

          <div className="tooltip tooltip-bottom">
            <div className="tooltip-content bg-base-100 text-base-content">
              {`${(toggleTheme.theme === "black" ? "cupcake" : "black")} mode`}
            </div>
            <button className="btn btn-ghost btn-circle" >
              <label className="swap swap-rotate">
                {/* this hidden checkbox controls the state */}
                <input type="checkbox" className="theme-controller" value="synthwave" onChange={() => {
                  toggleTheme.applyTheme(toggleTheme.theme === "black" ? 'cupcake' : 'black');
                }} />
                {(toggleTheme.theme === "black") ? (<>
                  <IoSunny className={swapOn} />
                  <IoSunny className={swapOff} />
                </>) : (<>
                  <IoMoon className={swapOn} />
                  <IoMoon className={swapOff} />
                </>)}

              </label>
            </button>
          </div>

          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt={auth.userDetails?._id || 'uid'}
                  src={auth.userDetails?.profilePhoto || '/user-circle.svg'}
                  className="bg-gray-500"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="dropdown-content card bg-base-300 w-80 shadow-md shadow-base-100">
              <figure className="px-10 py-5">
                <div className="avatar">
                  <div className="w-24 rounded-full">
                    <img
                      src={(auth.userDetails !== null) ? auth.userDetails.profilePhoto : '/user-circle.svg'}
                      alt={auth.userDetails?._id || 'uid'}
                      className="bg-gray-500"
                      loading="lazy"
                    />
                  </div>
                </div>
              </figure>
              <div className="card-body items-center text-center bg-base-200 rounded-box">
                <h2 className="card-title">{auth.userDetails?.name || 'User Name'}</h2>
                <p>{auth.userDetails?.email || 'example@email.com'}</p>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Outlet />
    </>
  )}
    sideBarElement={(
      <>
        <li className="bg-base-100 rounded-box focus:ring-2 hover:ring-2 hover:ring-accent"><Link to="/user/create">create</Link></li>
        {/* <li><Link to="/sidebar-item-2">Sidebar Item 2</Link></li> */}
      </>
    )} />;

}


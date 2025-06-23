import React from "react";
import IonIcon from "@reacticons/ionicons";
import { Outlet } from "react-router-dom";
import { useAuth } from "../context/Auth/AuthContext";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/Theme/ThemeContext";
const SideBar: React.FC<{ children: React.ReactElement, sideBarElement: React.ReactElement }> = ({ children, sideBarElement }: { children: React.ReactElement, sideBarElement: React.ReactElement }) => {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
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
  return <SideBar children={(
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <label htmlFor="my-drawer" className="btn btn-circle btn-ghost drawer-button">
            <IonIcon name="menu" className="h-full w-full" size="large" />
          </label>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-xl">MarkItDown</a>
        </div>
        <div className="navbar-end">

          <div className="tooltip tooltip-bottom">
            <div className="tooltip-content bg-base-100 text-base-content">
              {`Apply ${(toggleTheme.theme === "black" ? "light" : "black")} mode`}
            </div>
            <button className="btn btn-ghost btn-circle" >
              <label className="swap swap-rotate">
                {/* this hidden checkbox controls the state */}
                <input type="checkbox" className="theme-controller" value="synthwave" onChange={() => {
                  toggleTheme.applyTheme(toggleTheme.theme === "black" ? 'light' : 'black');
                }} />
                {/* sun icon */}
                <IonIcon name={toggleTheme.theme === "black" ? "sunny" : "moon"} className="swap-on h-10 w-10 fill-current" size="large" />
                {/* moon icon */}
                <IonIcon name={toggleTheme.theme === "black" ? "sunny" : "moon"} className="swap-off h-10 w-10 fill-current" size="large" />
              </label>
            </button>
          </div>

          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt={auth.userDetails?._id || 'uid'}
                  src={auth.userDetails?.profilePhoto || '/user-circle.svg'}
                />
              </div>
            </div>

            <div className="dropdown-content card bg-base-300 w-80 shadow-sm">
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
        <li><a>Sidebar Item 1</a></li>
        <li><a>Sidebar Item 2</a></li>
      </>
    )} />;

}


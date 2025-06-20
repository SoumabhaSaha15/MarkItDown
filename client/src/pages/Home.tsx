import React from 'react';
import AOS from 'aos';
import setTitle from '../utility/set-title';
export const Home: React.FC = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    setTitle("Home");
  }, []);
  const handleClick = () => {
    window.location.href = import.meta.env.VITE_GOOGLE_LOGIN_URI;
  }
  return (
    <>
      <div className="hero bg-base-200 min-h-screen" data-aos="zoom-in" data-aos-delay="100">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            {/* <button className="btn btn-primary" >Get Started</button> */}

            <button className="btn bg-white text-black border-[#e5e5e5]" onClick={() => {
              handleClick();
            }}>
              <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                  <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
                  <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                  <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
                </g>
              </svg>

              {/* <IonIcon name='logo-google'/> */}
              Login with Google
            </button>

          </div>
        </div>
      </div>
    </>
  );
}

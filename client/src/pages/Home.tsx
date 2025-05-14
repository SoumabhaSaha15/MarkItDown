import React from 'react';
import AOS from 'aos';
import { useToast } from '../context/Toast/ToastContext';
import setTitle from '../utility/set-title';
export const Home: React.FC = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    setTitle("Home");
  }, []);
  const toast = useToast();
  const handleClick = () => {
    toast.open(`toast is working`);
    // setTimeout(toast.close, 2000, toastId);
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
            <button className="btn btn-primary" onClick={() => {
              handleClick();
            }}>Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
}

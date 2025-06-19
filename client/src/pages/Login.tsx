import React from 'react';
import AOS from 'aos';
import { useSearchParams } from 'react-router-dom';
import setTitle from '../utility/set-title';
import { useAuth } from '../context/Auth/AuthContext';
export const Login: React.FC = () => {
  const [query] = useSearchParams();
  const auth = useAuth();
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    setTitle("Login");
    auth.setUserId(query.get('_id') || null);
    auth.login(query.get('_id') || '');
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="px-10 pt-10">
          <img
            src={auth.userDetails?.profilePhoto}
            alt={auth.userId || 'uid'}
            className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{auth.userDetails?.name}</h2>
          <p>{auth.userDetails?.email}</p>
          <div className="card-actions">
            <button className="btn btn-error" onClick={() => {
              auth.logout(auth.userId || '', () => {
                window.location.href = '/';
              });
            }}>log out</button>
          </div>
        </div>
      </div>
    </div>
  );
}

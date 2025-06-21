import React from 'react';
import AOS from 'aos';
import { useNavigate, useSearchParams } from 'react-router-dom';
import setTitle from '../utility/set-title';
import { useAuth } from '../context/Auth/AuthContext';
export const Login: React.FC = () => {
  const [query] = useSearchParams();
  const navigate = useNavigate();
  const auth = useAuth();
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    setTitle("Login");
    auth.login(query.get('_id') || '', () => { });
  }, []);

  // const handleLogOut = () => auth.logout(auth.userId || '',() => window.location.href = '/');

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="px-10 pt-10">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src={(auth.userDetails !== null) ? auth.userDetails.profilePhoto : '/user-circle.svg'} alt={auth.userId || 'uid'} />
            </div>
          </div>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{auth.userDetails?.name || 'User Name'}</h2>
          <p>{auth.userDetails?.email || 'example@email.com'}</p>
          <div className="card-actions">
            <button className="btn btn-primary" onClick={() => navigate('/user/profile', { replace: true })}>go to profile</button>
          </div>
        </div>
      </div>
    </div>
  );
}

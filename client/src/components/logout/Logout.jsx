import { useNavigate, useLocation } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname === '/login') return null;

  const handleLogout = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    navigate('/login');
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;

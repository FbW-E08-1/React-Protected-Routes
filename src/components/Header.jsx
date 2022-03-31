import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import MyContext from '../context/MyContext';
import Nav from './Nav';

const Header = () => {
  const { data, handleLogout } = useContext(MyContext);

  const navigate = useNavigate();

  return (
    <header>
      <Nav />

      {data.authorized && (
        <button className='header-button' onClick={handleLogout}>
          Logout
        </button>
      )}
      {!data.authorized && (
        <button className='header-button' onClick={() => navigate('/login')}>
          Login
        </button>
      )}
    </header>
  );
};

export default Header;

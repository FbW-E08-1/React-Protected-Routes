import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul>
        <NavLink
          to='/'
          style={({ isActive }) => {
            return { color: isActive && 'green' };
          }}>
          <li>Home</li>
        </NavLink>
        <NavLink
          to='/about'
          style={({ isActive }) => {
            return { color: isActive && 'green' };
          }}>
          <li>About</li>
        </NavLink>
        <NavLink
          to='/protected1'
          style={({ isActive }) => {
            return { color: isActive && 'green' };
          }}>
          <li>Protected Route 1</li>
        </NavLink>
        <NavLink
          to='/protected2'
          style={({ isActive }) => {
            return { color: isActive && 'green' };
          }}>
          <li>Protected Route 2</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Nav;

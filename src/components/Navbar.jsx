import { NavLink } from 'react-router-dom';
import './Navbar.scss';
import { BsPatchQuestionFill, BsFillHouseDoorFill } from 'react-icons/bs';

const Navbar = () => {
  const links = [
    { path: '/', text: <BsFillHouseDoorFill />, key: 1 },
    { path: '/', text: 'Market Cap', key: 2 },
    { path: 'about', text: <BsPatchQuestionFill />, key: 3 },
  ];

  return (
    <nav>
      <ul>
        {links.map((link) => (
          <li key={link.key}>
            <NavLink to={link.path}>{link.text}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

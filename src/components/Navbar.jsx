import { NavLink, useParams } from 'react-router-dom';
import './Navbar.scss';
import {
  BsPatchQuestionFill,
  BsFillHouseDoorFill,
  BsChevronLeft,
} from 'react-icons/bs';

const Navbar = () => {
  let links = [];
  if (Object.keys(useParams()).length === 0) {
    links = [
      { path: '/', text: <BsFillHouseDoorFill />, key: 1 },
      { path: '/', text: 'Market Cap', key: 2 },
      { path: 'about', text: <BsPatchQuestionFill />, key: 3 },
    ];
  } else {
    links = [
      { path: '/', text: <BsChevronLeft />, key: 1 },
      { path: '/', text: 'Company', key: 2 },
      { path: 'about', text: <BsPatchQuestionFill />, key: 3 },
    ];
  }

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

import {NavLink} from 'react-router';
import {useAside} from '~/components/Aside';
import logo from '../../public/logo.png';

export function NewHeader() {
  const {open} = useAside();

  return (
    <header className="header">
      <div className="header-content">
        {/* Logo on the left */}
        <NavLink to="/" className="logo">
          <img src={logo} alt="logo" className="" />
        </NavLink>

        {/* Navigation links in the center */}
        <nav className="nav">
          <NavLink
            to="/projects"
            className={({isActive}) =>
              `nav-item ${isActive ? 'text-black' : 'text-gray-600 hover:text-black'}`
            }
          >
            ABOUT US
          </NavLink>
          <NavLink
            to="/studio"
            className={({isActive}) =>
              `nav-item ${isActive ? 'text-black' : 'text-gray-600 hover:text-black'}`
            }
          >
            COLLECTIONS
          </NavLink>
          <NavLink
            to="/about"
            className={({isActive}) =>
              `nav-item ${isActive ? 'text-black' : 'text-gray-600 hover:text-black'}`
            }
          >
            WHY US
          </NavLink>
          <NavLink
            to="/journal"
            className={({isActive}) =>
              `nav-item ${isActive ? 'text-black' : 'text-gray-600 hover:text-black'}`
            }
          >
            OUR WORK
          </NavLink>
          <NavLink
            to="/contact"
            className={({isActive}) =>
              `nav-item ${isActive ? 'text-black' : 'text-gray-600 hover:text-black'}`
            }
          >
            CRAFTSMANSHIP
          </NavLink>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-600"
          onClick={() => open('mobile')}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}

export function MobileHeaderMenu() {
  const {close} = useAside();

  return (
    <nav className="flex flex-col space-y-6 p-4">
      <NavLink
        to="/projects"
        onClick={close}
        className={({isActive}) =>
          `text-lg font-light tracking-wide ${isActive ? 'text-black' : 'text-gray-600 hover:text-black'}`
        }
      >
        PROJECTS
      </NavLink>
      <NavLink
        to="/studio"
        onClick={close}
        className={({isActive}) =>
          `text-lg font-light tracking-wide ${isActive ? 'text-black' : 'text-gray-600 hover:text-black'}`
        }
      >
        STUDIO
      </NavLink>
      <NavLink
        to="/about"
        onClick={close}
        className={({isActive}) =>
          `text-lg font-light tracking-wide ${isActive ? 'text-black' : 'text-gray-600 hover:text-black'}`
        }
      >
        ABOUT
      </NavLink>
      <NavLink
        to="/journal"
        onClick={close}
        className={({isActive}) =>
          `text-lg font-light tracking-wide ${isActive ? 'text-black' : 'text-gray-600 hover:text-black'}`
        }
      >
        JOURNAL
      </NavLink>
      <NavLink
        to="/contact"
        onClick={close}
        className={({isActive}) =>
          `text-lg font-light tracking-wide ${isActive ? 'text-black' : 'text-gray-600 hover:text-black'}`
        }
      >
        CONTACT
      </NavLink>
    </nav>
  );
}

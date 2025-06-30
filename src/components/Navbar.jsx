import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef(null);
  const activeBox      = useRef(null);

  const moveActiveBox = (el) => {
    if (!el || !activeBox.current) return;
    const { offsetTop, offsetLeft, offsetWidth, offsetHeight } = el;
    activeBox.current.style.top    = `${offsetTop}px`;
    activeBox.current.style.left   = `${offsetLeft}px`;
    activeBox.current.style.width  = `${offsetWidth}px`;
    activeBox.current.style.height = `${offsetHeight}px`;
  };

  const initActiveBox = () => {
    lastActiveLink.current = document.querySelector('.nav-link.active');
    moveActiveBox(lastActiveLink.current);
  };


  useEffect(() => {
    initActiveBox();                              
    window.addEventListener('resize', initActiveBox);
    return () => window.removeEventListener('resize', initActiveBox); 
  }, []);

  const handleClick = (e) => {
    const target = e.target;
    if (target === lastActiveLink.current) return;   
    lastActiveLink.current?.classList.remove('active');
    target.classList.add('active');
    lastActiveLink.current = target;
    moveActiveBox(target);
  };


  const navItems = [
    { label: 'Home',    link: '#home'    },
    { label: 'About',   link: '#about'   },
    { label: 'Work',    link: '#work'    },
    { label: 'Reviews', link: '#reviews' },
    { label: 'Contact', link: '#contact', extraClass: 'md:hidden' },
  ];

  return (
    <nav className={`navbar${navOpen ? ' active' : ''}`}>
      {navItems.map(({ label, link, extraClass }, i) => (
        <a
          key={i}
          href={link}
          className={`nav-link ${i === 0 ? 'active' : ''} ${extraClass ?? ''}`}
          onClick={handleClick}
        >
          {label}
        </a>
      ))}

      <div className="active-box" ref={activeBox} />
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;

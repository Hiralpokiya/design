import { useEffect, useState } from 'react';
import logo from '../Image/logo.png'
import logo1 from '../Image/Home.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activePage, setActivePage] = useState('/home');

  useEffect(() => {
    const currentPath = window.location.pathname;

    setActivePage(currentPath);
  }, []);

  return (
    <div className="bg-gradient-to-r  ">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between p-5">
          <div className="flex items-center">
          <img src={logo} className="" alt="logo" />

          </div>

          <ul className="flex gap-9 text-[20px] ">
            <li>
              <a href="/home" className={activePage === '/home' || '/' ? 'underline' : ''}>
                Home
              </a>
            </li>
            <li>
              <a href="/products" className={activePage === '/products' ? 'underline' : ''}>
                Flashcard
              </a>
            </li>
        
            <li>
              <a href="/contact" className={activePage === '/contact' ? 'underline' : ''}>
                Contact 
              </a>
            </li>
            <li>
              <a href="/contact" className={activePage === '/contact' ? 'underline' : ''}>
                FAQ 
              </a>
            </li>
            <li>
              <a href="/signin" className={`bg-blue-900 hover:bg-cyan-600 text-white px-5 py-3 rounded-full transition duration-300 ${activePage === '/signin' ? 'underline' : ''}`}>
                Login
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className='m-[50px]'>
      <div className='flex items-center list-none gap-2 text-[20px] text-gray-600'>
        <li><img src={logo1} alt="Logo" /></li>
        <span className='text-blue-800 font-bold'>{' > '}</span>
        <li><Link to="/flashcard">Flashcard</Link></li>
        <span className='text-blue-800 font-bold'>{' > '}</span>
        <li><Link to="/mathematics">Mathematics</Link></li>
        <span className='text-blue-800 font-bold'>{' > '}</span>
        <li className='text-blue-800 font-bold'><Link to="/relation-and-function">Relation and Function</Link></li>
      </div>
    </div>
    </div>
  );
};

export default Navbar;

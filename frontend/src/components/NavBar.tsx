import { useState, useEffect, useRef } from "react";
import { List } from "phosphor-react";
import Logo from '../assets/site-new-sun.jpg';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full h-24 bg-black flex items-center pl-8 gap-6 justify-between"
      style={{ boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.4)' }}
    >
      <a href="/" className="cursor-pointer">
        <img alt="NewSun logo" src={Logo} className="bg-transparent cursor-pointer" width={180} height={180} />
      </a>

      <div>
        <button
          ref={buttonRef}
          className="text-lg font-extrabold text-white transition-all ease-in-out duration-500 cursor-pointer hover:bg-gray-950 hover:text-gray-200 py-2 px-3 rounded-2xl"
          onClick={toggleMenu}
        >
          <List weight="bold" size={28} />
        </button>
        {isMenuOpen && (
          <div
            ref={menuRef}
            className="absolute right-4 top-38 bg-black w-48 border border-white rounded-md shadow-lg"
            style={{ transform: "translateX(-10%)" }}
          >

            <a key={"/simular"} href='/simular'>
              <p className="block py-2 px-4 text-white font-bold hover:bg-amber-600 transition-all ease-in-out duration-300">
                Simular
              </p>
            </a>


            <a key={"Listagem"} href='/listagem'>
              <p className="block py-2 px-4 text-white font-bold hover:bg-amber-600 transition-all ease-in-out duration-300">
                Listagem
              </p>
            </a>

          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar
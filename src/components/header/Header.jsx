import HamburgerButton from "../hamburgerbutton/HamburgerButton"
import { useState } from 'react';
import Menu from "../menu/Menu";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

    const toggleHamburger = () => {
        setIsActive(!isActive);
    };

  return (
    <header className="w-full h-16 fixed top-0 z-20">
      <HamburgerButton isActive={isActive} toggleHamburger={toggleHamburger} />
      <Menu isActive={isActive}/>
    </header>
  )
}

export default Header
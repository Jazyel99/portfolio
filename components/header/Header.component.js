import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiChevronLeft } from 'react-icons/bi';
import { Header, HeaderButtonBack, HeaderButtonHambuger, 
  HeaderNav, HeaderNavLi, HeaderNavUl, HeaderTitle, Logo } from './Header.style';

const HeaderComponent = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const onClickHambungerIcon = () => {
    setOpenMenu(!openMenu);
  }

  return (
    <Header opendMenu={ openMenu }>
      <HeaderButtonBack>
        { false &&  <BiChevronLeft />}
      </HeaderButtonBack>
      <Logo>
        Jaz
      </Logo>
      <HeaderTitle opendMenu={ openMenu }>
        Home
      </HeaderTitle>
      <HeaderButtonHambuger opendMenu={ openMenu }>
        <GiHamburgerMenu
          onClick={ onClickHambungerIcon }
        />
      </HeaderButtonHambuger>
      { openMenu && <div>
        <ul className={`text-white text-xl
          transition
          duration-300
          ease-in-out
          delay-300
          opacity-0 ${openMenu ? 'opacity-100' : 'hidden'}`}>
          <li className="hover:bg-slate-900 transition duration-300 ease-in-out">Home</li>
          <li className="hover:bg-slate-900 transition duration-300 ease-in-out">Contacts</li>
          <li className="hover:bg-slate-900 transition duration-300 ease-in-out">Projects</li>
          <li className="hover:bg-slate-900 transition duration-300 ease-in-out">About me</li>
          <li className="hover:bg-slate-900 transition duration-300 ease-in-out">Certificates</li>
          <li className="hover:bg-orange-500 transition duration-300 ease-in-out" onClick={ () => setOpenMenu(!openMenu) }>Sair</li>
        </ul>
      </div>}
      <HeaderNav opendMenu={ openMenu }>
        <HeaderNavUl>
          <HeaderNavLi>Home</HeaderNavLi>
          <HeaderNavLi>Contacts</HeaderNavLi>
          <HeaderNavLi>Projects</HeaderNavLi>
          <HeaderNavLi>About me</HeaderNavLi>
          <HeaderNavLi>Certificates</HeaderNavLi>
        </HeaderNavUl>
      </HeaderNav>
    </Header>
  );
}

export default HeaderComponent;

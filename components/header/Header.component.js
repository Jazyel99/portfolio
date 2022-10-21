import React, { useContext } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiChevronLeft } from 'react-icons/bi';
import { Header, HeaderButtonBack, HeaderButtonHambuger, 
  HeaderNav, HeaderNavLi, HeaderNavUl, HeaderTitle } from './Header.style';
import MenuComponent from './Menu.component';
import { AppContext } from '../../context';

const HeaderComponent = (props) => {
  const { openMenu, setOpenMenu } = useContext(AppContext);

  const onClickHambungerIcon = () => {
    setOpenMenu(!openMenu);
  }

  return (
    <Header opendMenu={ openMenu }>
      <HeaderButtonBack>
        { false &&  <BiChevronLeft />}
      </HeaderButtonBack>
      <HeaderTitle opendMenu={ openMenu }>
        {props.title}
      </HeaderTitle>
      <HeaderButtonHambuger opendMenu={ openMenu }>
        <GiHamburgerMenu
          onClick={ onClickHambungerIcon }
        />
      </HeaderButtonHambuger>
      { openMenu && <MenuComponent openMenu={ openMenu }/>}
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

import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiChevronLeft } from 'react-icons/bi';
import tw from 'tailwind-styled-components';

const Header = tw.header`
h-[100px]
sx:grid
sx:grid-cols-3
bg-indigo-500

sm:bg-slate-900
sm:flex
sm:justify-around
sm:items-center
transition-all
duration-300
ease-in-out

${props => props.opendMenu && "h-full sx:flex sx:justify-center sx:items-center sx:text-center"};
${props => !props.opendMenu && "h-[100px]"};
`
const HeaderTitle = tw.h2`
text-white
text-xl
flex
justify-center
my-auto
${props => props.opendMenu && "hidden"};
`
const HeaderButtonHambuger = tw.button`
text-white
text-xl
flex
justify-center
my-auto
hover:cursor-pointer
sm:hidden

${props => props.opendMenu && "hidden"};
`

const HeaderButtonBack = tw.button`
text-3xl
text-white
sm:hidden
${props => props.opendMenu && "hidden"};
`

const HeaderNav = tw.nav`
sx:hidden
`;

const HeaderNavUl = tw.ul`
text-white
text-xl
flex
gap-4
`;

const HeaderNavLi = tw.li`
hover:cursor-point
hover:underline
cursor-pointer
`;

const Logo = tw.h1`
text-white
font-semibold
text-2xl
sx:hidden
`

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

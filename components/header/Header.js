import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import tw from 'tailwind-styled-components';

const Header = tw.header`
h-[100px]
grid
grid-cols-3
bg-[#333A7E]
sm:bg-slate-900
sm:flex
sm:justify-around
sm:items-center
`
const HeaderTitle = tw.h2`
text-white
text-xl
flex
justify-center
my-auto
sm:hidden

`
const HeaderButtonHambuger = tw.button`
text-white
text-xl
flex
justify-center
my-auto
hover:cursor-pointer
sm:hidden
`

const HeaderButtonBack = tw.button`
`

const HeaderNav = tw.nav`
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
`


const HeaderComponent = () => {
  return (
    <Header>
      {/* <HeaderButtonBack>
      </HeaderButtonBack> */}
      <Logo>
        Jaz
      </Logo>
      <HeaderTitle>
        Home
      </HeaderTitle>
      <HeaderButtonHambuger>
        <GiHamburgerMenu />
      </HeaderButtonHambuger>

      <HeaderNav>
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

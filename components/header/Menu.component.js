import { useContext } from 'react';
import tw from 'tailwind-styled-components';
import { AppContext } from '../../context';

const MenuStyled = tw.div`
  flex
  justify-center
  items-center
`
const MenuUlStyled = tw.ul`
  text-white text-xl
  w-full
  transition
  duration-300
  ease-in-out
  delay-300
  opacity-0 ${props => props.openMenu ? 'opacity-100' : 'hidden'}
  font-semibold
`
const MenuLiStyled = tw.li`
  hover:bg-slate-900 
  transition ]
  duration-300 
  ease-in-out 
  hover:cursor-pointer 
  p-4 
  w-full 
  text-center
`

const MenuComponent = () => {
  const { openMenu, setOpenMenu } = useContext(AppContext);

  return (
    <MenuStyled>
      <MenuUlStyled openMenu={ openMenu }>
        <MenuLiStyled>Home</MenuLiStyled>
        <MenuLiStyled>Contacts</MenuLiStyled>
        <MenuLiStyled>Projects</MenuLiStyled>
        <MenuLiStyled>About me</MenuLiStyled>
        <MenuLiStyled>Certificates</MenuLiStyled>
        <li className="hover:bg-orange-500 transition duration-300 ease-in-out hover:cursor-pointer p-4 w-full text-center" onClick={() => setOpenMenu(!openMenu)}>Exit</li>
      </MenuUlStyled>
    </MenuStyled>
  );
}

export default MenuComponent;

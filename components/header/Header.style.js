import tw from 'tailwind-styled-components';

export const Header = tw.header`
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
export const HeaderTitle = tw.h2`
text-white
text-xl
flex
justify-center
my-auto
${props => props.opendMenu && "hidden"};
`
export const HeaderButtonHambuger = tw.button`
text-white
text-xl
flex
justify-center
my-auto
hover:cursor-pointer
sm:hidden

${props => props.opendMenu && "hidden"};
`

export const HeaderButtonBack = tw.button`
text-3xl
text-white
sm:hidden
${props => props.opendMenu && "hidden"};
`

export const HeaderNav = tw.nav`
sx:hidden
`;

export const HeaderNavUl = tw.ul`
text-white
text-xl
flex
gap-4
`;

export const HeaderNavLi = tw.li`
hover:cursor-point
hover:underline
cursor-pointer
`;

export const Logo = tw.h1`
text-white
font-semibold
text-2xl
sx:hidden
`
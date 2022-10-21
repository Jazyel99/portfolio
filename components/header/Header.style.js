import tw from 'tailwind-styled-components';

export const Header = tw.header`
h-[100px]
bg-indigo-500

sm:grid
sm:grid-cols-3

md:bg-slate-900
md:flex
md:justify-around
md:items-center

transition-all
duration-300
ease-in-out

${props => props.opendMenu && "h-full fixed top-0 w-full z-50"};
${props => !props.opendMenu && "h-[100px]"};
`
export const HeaderTitle = tw.h2`
text-white
text-2xl
flex
justify-center
my-auto
font-semibold

md:hidden
sm:flex

${props => props.opendMenu && "sm:hidden"};
`
export const HeaderButtonHambuger = tw.button`
text-white
text-xl
flex
justify-center
my-auto
hover:cursor-pointer

md:hidden

${props => props.opendMenu && "hidden"};
`

export const HeaderButtonBack = tw.button`
text-3xl
text-white
md:hidden
${props => props.opendMenu && "hidden"};
`

export const HeaderNav = tw.nav`
hidden
md:flex
`;

export const HeaderNavUl = tw.ul`
text-white
text-xl
flex
gap-4
justify-center
`;

export const HeaderNavLi = tw.li`
hover:cursor-point
hover:underline
cursor-pointer
`;

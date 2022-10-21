import Image from 'next/image';
import tw from 'tailwind-styled-components';
import { BiMap } from 'react-icons/bi';
import { AiFillGithub } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';

const ProfileStyled = tw.div`
my-8
`;

const ProfileComponent = () => {
  return (
    <ProfileStyled>
      <div
        className="w-[100px] mx-auto rounded-full"
      >
        <Image
          src="/asserts/jaziel.jpeg"
          alt="jaziel silva"
          width={100}
          height={100}
          className="rounded-full"
        />
      </div>
      <div className="text-white text-center">
        <h2 className="text-3xl font-bold">Jaziel Silva</h2>
        <div className="flex justify-center items-center gap-2 text-xl">
          <BiMap className="text-white"/>
          <p className="">Teresina-PI</p>
        </div>
        <p>Software development student at Trybe</p>
      </div>
      <div>
        <ul className="flex gap-2 text-white font-semibold justify-center underline">
          <li className="flex items-center gap-2 text-xl">
            <AiFillGithub />
            <a>GitHub</a>
          </li>
          <li className="flex items-center gap-2 text-xl">
            <BsLinkedin />
            <a>Linkedin</a>
          </li>
          <li className="flex items-center gap-2 text-xl">
            <a>About me</a>
          </li>
        </ul>
      </div>
      
      <div className="w-[60vw] border-2 border-indigo-500 mx-auto my-8 rounded-md">
        <span className="text-white relative top-[-15px] left-4 bg-slate-900 font-semibold p-2">
          Skills
        </span>

        <div className="grid grid-cols-5 gap-4 p-4">
          <Image
            src="/asserts/icons_language_framework/js_logo.png"
            alt="js logo"
            width={16}
            height={16}
            layout="responsive"
          />
          <Image
            src="/asserts/icons_language_framework/docker_logo.webp"
            alt="js logo"
            width={8}
            height={8}
            layout="responsive"
          />
          <Image
            src="/asserts/icons_language_framework/mysql_logo.png"
            alt="js logo"
            width={8}
            height={8}
            layout="responsive"
          />
          <Image
            src="/asserts/icons_language_framework/react_logo.png"
            alt="js logo"
            width={8}
            height={8}
            layout="responsive"
          />
          <Image
            src="/asserts/icons_language_framework/html_logo.png"
            alt="js logo"
            width={8}
            height={8}
            layout="responsive"
          />
          <Image
            src="/asserts/icons_language_framework/css_logo.png"
            alt="js logo"
            width={8}
            height={8}
            layout="responsive"
          />
          <Image
            src="/asserts/icons_language_framework/node_logo.png"
            alt="js logo"
            width={8}
            height={8}
            layout="responsive"
            className="rounded-full"
          />
        </div>
      </div>
    </ProfileStyled>
  );
}

export default ProfileComponent;

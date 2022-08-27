import Head from 'next/head';
import React from 'react';
import HeaderComponent from '../../components/header/Header.component';

import { BiPhone } from 'react-icons/bi'
import { BsLinkedin, BsWhatsapp } from 'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai'
import { HiOutlineMail } from 'react-icons/hi'


const Contacts = () => {
  return (
    <div>
      <Head>
        <title>Contacts</title>
      </Head>

      <main
        className="bg-slate-900 h-full w-full absolute"
      >
        <HeaderComponent title="Contacts" />
        <ul
          className=" flex flex-col gap-2 my-8
          text-white text-xl font-semibold"
        >
          <li className="flex items-center gap-4 hover:cursor-pointer">
            <BiPhone />
            <span>+55 86 98126-7816</span>
          </li>
          <li className="flex items-center gap-4 hover:cursor-pointer">
            <AiFillGithub />
            <span>Github</span>
          </li>
          <li className="flex items-center gap-4 hover:cursor-pointer">
            <BsLinkedin />
            <span>Linkedin</span>
          </li>
          <li className="flex items-center gap-4 hover:cursor-pointer">
            <HiOutlineMail />
            <span>jazyel99@gmail.com</span>
          </li>
          <li className="flex items-center gap-4 hover:cursor-pointer">
            <HiOutlineMail />
            <span>jaziel@outlook.com</span>
          </li>
        </ul>
        <a
          href="https://api.whatsapp.com/send?phone=5586981367816&text=Ol%C3%A1%2C%20Jaziel!"
          target="blank"
        >
          <button
            type="button"
            className="flex items-center gap-4 p-4
            transition-all ease-in-out delay-300
            text-white font-semibold hover:bg-indigo-500
            bg-indigo-900 rounded-md"
          >
            <BsWhatsapp />
            Send direct message for my whatsapp!
          </button>
        </a>
      </main>
    </div>
  );
}

export default Contacts;

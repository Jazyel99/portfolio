import Head from 'next/head';
import React from 'react';
import HeaderComponent from '../../components/header/Header.component';

const Contacts = () => {
  return (
    <div>
      <Head>
        <title>Contacts</title>
      </Head>

      <main
        className="bg-slate-900"
      >
        <HeaderComponent />
        <ul>
          <li>
            <span>+55 86 98126-7816</span>
          </li>
          <li>
            <span>Github</span>
          </li>
          <li>
            <span>Linkedin</span>
          </li>
          <li>
            <span>jazyel99@gmail.com</span>
          </li>
          <li>
            <span>jaziel@outlook.com</span>
          </li>
        </ul>
      </main>
    </div>
  );
}

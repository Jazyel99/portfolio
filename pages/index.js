import React from 'react';
import Head from 'next/head';
import HeaderComponent from '../components/header/Header.component';
import ProfileComponent from '../components/Profile/Profile.component';
import GraduationComponent from '../components/Graduation/Graduation.component';
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Jaziel Silva</title>
        <meta name="description" content="Project by Jaziel Silva" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className="bg-slate-900 h-full w-full">
        <HeaderComponent title="Home"/>
        <ProfileComponent />
        <GraduationComponent />
      </main>
    </div>
  )
}

export default Home;

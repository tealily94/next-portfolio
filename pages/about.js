import Layout from '../components/layout';
import Head from 'next/head';
import Image from 'next/image';
import java from '../public/java.png';
import javascript from '../public/javascript-logo.png';
import reactImage from '../public/react.png';
import cssImage from '../public/css-logo.png';
import profile from '../public/profile.jpeg';
import Skill from '../components/skill';
import nextjs from '../public/nextjs.png';

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About Me</title>
        <meta name='description' content='Next.JS Journey with Soo' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='flex flex-col items-center justify-center min-h-screen mb-10 px-6'>
        <h1 className='text-4xl font-bold sm:text-6xl'>About me</h1>
        <div className='flex justify-between items-center mt-8 max-w-5xl'>
          <Image src={profile} layout='intrinsic' />
          <div className='mx-10 max-w-lg'>
            <h1 className='text-lg sm:text-2xl md:text-3xl'>
              Name: Sooryun {'(Soo)'} Kim
            </h1>
            <h1 className='text-lg sm:text-2xl md:text-3xl'>
              Country: South Korea / Canada
            </h1>
            <h1 className='text-lg sm:text-2xl md:text-3xl'>
              Position: Software Dev | Frontend Dev
            </h1>
            <p className='mt-4 sm:text-md md:text-xl'>
              A creative and passionate team player ready to jump into a dynamic
              environment where I can design, develop, and test software
              solutions. Skilled in identifying problem areas, recognizing the
              impact on the business and users, and prioritizing the
              implementation of appropriate solutions
            </p>
          </div>
        </div>
        <div className='mt-10 w-1/2'>
          <h1 className='text-4xl font-bold sm:text-6xl text-center mb-4'>
            Skills {'&'} Passion
          </h1>
          <h2 className='text-2xl sm:text-3xl text-start'>Web Development</h2>
          <div className='flex'>
            <Skill img={reactImage} name='React.JS' />
            <Skill img={cssImage} name='CSS' />
            <Skill img={javascript} name='JavaScript' />
            <Skill img={nextjs} name='Next.JS' />
          </div>
        </div>
        <Skill img={java} name='java' />

        <Skill img={java} name='java' />
        <Skill img={java} name='java' />
        <Skill img={java} name='java' />
      </div>
    </Layout>
  );
}

import Animation from '../home/animation';
import Link from 'next/link';

export default function Hero() {
  return (
    <>
      <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
        <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
          Everything Soo
          <br className='hidden lg:inline-block' />
          Following Her Journey...
        </h1>
        <p className='mb-8 leading-relaxed'>
          A creative and passionate team player ready to jump into a dynamic
          environment where I can design, develop, and test software solutions.
          Skilled in identifying problem areas, recognizing the impact on the
          business and users, and prioritizing the implementation of appropriate
          solutions.
        </p>
        <div className='flex justify-center'>
          <Link href='/projects'>
            <a className='btn-project'>Check My Projects</a>
          </Link>
        </div>
      </div>
      <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
        <Animation />
      </div>
    </>
  );
}

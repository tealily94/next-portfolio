import Image from 'next/image';
import Link from 'next/link';
import DarkModeToggleButton from './dark-mode-toggle-button';
import everythingsoo from '../public/everythingsoo.png';

export default function Header() {
  return (
    <>
      <header className='text-gray-600 body-font'>
        <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
          <Link href='/'>
            <a className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'>
              <Image src={everythingsoo} width={40} height={45} />
              <span className='ml-3 text-3xl'>Everything Soo</span>
            </a>
          </Link>

          <nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
            <Link href='/'>
              <a className='mr-5 hover:text-gray-900'>HOME</a>
            </Link>

            <Link href='/about'>
              <a className='mr-5 hover:text-gray-900'>ABOUT ME</a>
            </Link>

            <Link href='/projects'>
              <a className='mr-5 hover:text-gray-900'>PROJECT</a>
            </Link>

            <Link href='mailto:sooryun.kim94@gmail.com'>
              <a className='mr-5 hover:text-gray-900'>CONTACT</a>
            </Link>
          </nav>
          <DarkModeToggleButton />
        </div>
      </header>
    </>
  );
}

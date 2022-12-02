import Animation from '../home/animation';
import Link from 'next/link';

export default function Hero() {
  return (
    <>
      <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
        <h1 className='title-font sm:text-5xl text-3xl mb-1 font-medium text-gray-900'>
          Welcome to Everything Soo!
        </h1>
        <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
          수련의 작업실에 오신 걸 환영합니다
        </h1>
        <h1 className='sm:text-3xl text-2xl font-medium text-violet-800 dark:text-violet-500'>
          歡迎來到我的個人網站
        </h1>
        <h1 className='sm:text-3xl text-2xl font-medium text-violet-500 dark:text-violet-300'>
          Bienvenue sur le site de Soo
        </h1>
        <h1 className='sm:text-3xl text-2xl font-medium text-violet-300 dark:text-violet-100'>
          Willkommen auf der Website von Soo
        </h1>
        <div className='flex justify-center mt-6'>
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

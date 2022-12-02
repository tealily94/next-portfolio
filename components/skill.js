import Image from 'next/image';

export default function Skill(props) {
  return (
    <div class='flex justify-center m-3'>
      <div class='flex flex-row w-50 sm:max-w-sm md:max-w-xl rounded-lg shadow-lg '>
        <Image width={100} height={100} src={props.img} alt='' />
        <div class='w-full flex justify-center items-center'>
          <h1 class='text-gray-100 text-xl font-medium'>{props.name}</h1>
        </div>
      </div>
    </div>
  );
}
